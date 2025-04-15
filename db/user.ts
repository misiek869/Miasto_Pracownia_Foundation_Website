import { hashSync } from 'bcrypt-ts-edge'

export const sampleUser = {
	name: process.env.ADMIN_NAME,
	email: process.env.ADMIN_EMAIL,
	password: hashSync(process.env.ADMIN_INITIAL_PASSWORD, 10),
	role: 'admin',
}
