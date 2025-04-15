import { hashSync } from 'bcrypt-ts-edge'

function getEnvVar(name: string): string {
	const value = process.env[name]
	if (!value) throw new Error(`Missing environment variable: ${name}`)
	return value
}

export const sampleUser = {
	name: getEnvVar('ADMIN_NAME'),
	email: getEnvVar('ADMIN_EMAIL'),
	password: hashSync(getEnvVar('ADMIN_INITIAL_PASSWORD'), 10),
	role: 'admin' as const,
}
