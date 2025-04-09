import { hashSync } from 'bcrypt-ts-edge'

export const sampleUser = {
	name: 'Michał',
	email: 'michal@michal.pl',
	password: hashSync('123456', 10),
	role: 'admin',
}
