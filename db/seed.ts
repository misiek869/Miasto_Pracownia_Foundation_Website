import { PrismaClient } from '@prisma/client'
import { seedEvents } from '@/events'

async function main() {
	const prisma = new PrismaClient()

	await prisma.event.deleteMany()

	await prisma.event.createMany({
		data: seedEvents,
	})

	console.log('database seeded')
}

main()
