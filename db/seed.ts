import { PrismaClient } from '@prisma/client'
import { events } from './events'
import { sampleUser } from './user'

async function main() {
	const prisma = new PrismaClient()
	await prisma.event.deleteMany()
	await prisma.account.deleteMany()
	await prisma.session.deleteMany()
	await prisma.verificationToken.deleteMany()
	await prisma.user.deleteMany()

	await prisma.event.createMany({
		data: events,
	})
	await prisma.user.createMany({
		data: sampleUser,
	})

	console.log('database seeded')
}

main()
