'use server'

import { PrismaClient } from '@prisma/client'
import { convertToPlainObject } from '../utils'
// import { Prisma } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import z from 'zod'
import { insertEventSchema, updateEventSchema } from '../validators'
import { error } from 'console'

// Get latest events

export async function getLatestEvents() {
	const prisma = new PrismaClient()

	const data = await prisma.event.findMany()

	return convertToPlainObject(data)
}

// type SalesDataType = {
// 	month: string
// 	totalSales: number
// }[]

export async function getEventsSummary() {
	const prisma = new PrismaClient()

	const events = await prisma.event.findMany({})

	const eventsByMonthRaw = await prisma.$queryRaw<
		Array<{ month: string; warsztaty: number }>
	>`SELECT to_char(cast("eventDate" as date), 'MM/YY') as "month", COUNT(*) as "warsztaty" FROM "Event" GROUP BY to_char(cast("eventDate" as date), 'MM/YY')`

	const eventsByMonth = eventsByMonthRaw.map(entry => ({
		month: entry.month,
		warsztaty: Number(entry.warsztaty),
	}))

	return { events, eventsByMonth }
}

export async function getAllOrders({
	limit = 10,
	page = 1,
}: {
	limit?: number
	page?: number
}) {
	const prisma = new PrismaClient()

	const safePage = Math.max(1, page)
	const safeLimit = Math.max(1, limit)
	const data = await prisma.event.findMany({
		orderBy: { eventDate: 'desc' },
		take: safeLimit,
		skip: (safePage - 1) * safeLimit,
	})

	const dataCount = await prisma.event.count()

	return {
		data,
		totalPages: Math.ceil(dataCount / safeLimit),
	}
}

export async function deleteEvent(id: string) {
	const prisma = new PrismaClient()

	try {
		await prisma.event.delete({
			where: { id },
		})

		await Promise.all([
			revalidatePath('/admin/events'),
			revalidatePath('/kalendarz'),
			revalidatePath('/'),
		])

		return { success: true, message: 'Usunięto' }
	} catch (error) {
		console.error(error)
		return { success: false, message: 'Nie udało się usunąć wydarzenia' }
	}
}

export async function createEvent(data: z.infer<typeof insertEventSchema>) {
	const prisma = new PrismaClient()
	try {
		const event = insertEventSchema.parse(data)

		await prisma.event.create({
			data: event,
		})

		await Promise.all([
			revalidatePath('/admin/events'),
			revalidatePath('/kalendarz'),
			revalidatePath('/'),
		])

		return { success: true, message: 'utworzono warsztat' }
	} catch (error) {
		console.error(error)
		return { success: false, message: 'nie udało się utworzyć warsztatu' }
	}
}

export async function updateEvent(data: z.infer<typeof updateEventSchema>) {
	const prisma = new PrismaClient()
	try {
		const event = updateEventSchema.parse(data)
		const existingEvent = await prisma.event.findFirst({
			where: { id: event.id },
		})

		if (!existingEvent) {
			// @ts-expect-error will fix later

			throw new error('Nie udało się znaleźć warsztatu')
		}

		await prisma.event.update({
			where: { id: event.id },
			data: event,
		})

		revalidatePath('/admin/events')

		return { success: true, message: 'edytowano warsztat' }
	} catch (error) {
		console.error(error)
		return { success: false, message: 'nie udało się utworzyć warsztatu' }
	}
}

export async function getSingleEventById(eventId: string) {
	const prisma = new PrismaClient()

	const data = prisma.event.findFirst({ where: { id: eventId } })

	return data
}
