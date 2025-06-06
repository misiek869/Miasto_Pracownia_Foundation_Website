'use server'

import { signInFormSchema } from '../validators'
import { signIn, signOut } from '@/auth'
import { isRedirectError } from 'next/dist/client/components/redirect-error'

export async function signInWithCredentials(prev: unknown, formData: FormData) {
	console.log('ENV:', {
		email: process.env.ADMIN_EMAIL,
		password: process.env.ADMIN_INITIAL_PASSWORD,
	})
	try {
		const user = signInFormSchema.parse({
			email: formData.get('email'),
			password: formData.get('password'),
		})

		await signIn('credentials', user)

		return { success: true, message: 'Signed in successfully' }
	} catch (error) {
		if (isRedirectError(error)) {
			throw error
		}

		return { success: false, message: 'Invalid email or password' }
	}
}

export async function signOutUser() {
	await signOut()
}
