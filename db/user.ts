import { hashSync } from 'bcrypt-ts-edge'
import 'dotenv/config'

// function getEnvVar(name: string): string {
// 	const value = process.env[name]
// 	if (!value) throw new Error(`Missing environment variable: ${name}`)
// 	return value
// }

export const sampleUser = {
	name: process.env.ADMIN_NAME as string,
	email: process.env.ADMIN_EMAIL as string,
	password: process.env.ADMIN_INITIAL_PASSWORD,
	role: 'admin' as string,
}

// export const sampleUser = {
// 	name: process.env.ADMIN_NAME as string,
// 	email: process.env.ADMIN_EMAIL as string,
// 	password: hashSync(process.env.ADMIN_INITIAL_PASSWORD as string, 10),
// 	role: 'admin' as string,
// }
