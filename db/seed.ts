import { PrismaClient } from '@prisma/client'
import { events } from '@/events'

async function main() {
	const prisma = new PrismaClient()

	await prisma.event.deleteMany()

	await prisma.event.createMany({
		data: events,
	})

	console.log('database seeded')
}

main()
