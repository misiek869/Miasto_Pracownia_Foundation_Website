import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/db/prisma'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compareSync } from 'bcrypt-ts-edge'
import type { NextAuthConfig } from 'next-auth'
import type { User } from 'next-auth'

declare module 'next-auth' {
	interface User {
		role: string
	}
}

export const config = {
	pages: {
		signIn: '/sign-in',
		error: '/sign-in',
	},
	session: {
		strategy: 'jwt' as const,
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			credentials: {
				email: { type: 'email' },
				password: { type: 'password' },
			},
			async authorize(credentials): Promise<User | null> {
				if (!credentials?.email || !credentials?.password) return null

				const user = await prisma.user.findFirst({
					where: { email: credentials.email as string },
				})

				if (!user?.password) return null

				const isMatch = compareSync(
					credentials.password as string,
					user.password
				)

				return isMatch
					? {
							id: user.id,
							name: user.name,
							email: user.email,
							role: user.role,
					  }
					: null
			},
		}),
	],

	callbacks: {
		async session({ session, token }: any) {
			session.user.id = token.sub
			session.user.role = token.role
			session.user.name = token.name

			return session
		},
		async jwt({ token, user }: any) {
			if (user) {
				token.role = user.role

				if (user.name === 'NO_NAME') {
					token.name = user.email!.split('@')[0]

					await prisma.user.update({
						where: { id: user.id },
						data: { name: token.name },
					})
				}
			}

			return token
		},
	},
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
