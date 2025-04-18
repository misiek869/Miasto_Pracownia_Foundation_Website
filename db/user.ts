import { hashSync } from 'bcrypt-ts-edge'

interface User {
	name: string
	email: string
	password: string
	role?: string
}

export const user: User = {
	name: process.env.ADMIN_NAME as string,
	email: process.env.ADMIN_EMAIL as string,
	password: hashSync(process.env.ADMIN_INITIAL_PASSWORD as string, 10),
	role: process.env.ADMIN_ROLE,
}
