'use server'

import { PrismaClient } from '@prisma/client'
import { convertToPlainObject } from '../utils'
import { Prisma } from '@prisma/client'
import { revalidatePath } from 'next/cache'

// Get latest events

export async function getLatestEvents() {
	const prisma = new PrismaClient()

	const data = await prisma.event.findMany()

	return convertToPlainObject(data)
}

type SalesDataType = {
	month: string
	totalSales: number
}[]

export async function getEventsSummary() {
	const prisma = new PrismaClient()

	const eventCount = await prisma.event.count()

	// const salesDataRaw = await prisma.$queryRaw<
	// 	Array<{ month: string; totalEvents: Prisma.Decimal }>
	// >`SELECT to_char("eventDate", 'MM/YY') as "month", sum("eventC") as "totalSales" FROM "Order" GROUP BY to_char("createdAt", 'MM/YY')`

	// const salesData: SalesDataType = salesDataRaw.map(entry => ({
	// 	month: entry.month,
	// 	totalEvents: eventCount,
	// }))

	return eventCount
}

export async function getAllOrders({
	limit = 10,
	page,
}: {
	limit?: number
	page?: number
}) {
	const prisma = new PrismaClient()
	const data = await prisma.event.findMany({
		orderBy: { eventDate: 'desc' },
		take: limit,
		skip: (page - 1) * limit,
	})

	const dataCount = await prisma.event.count()

	return {
		data,
		totalPages: Math.ceil(dataCount / limit),
	}
}

export async function deleteEvent(id: string) {
	const prisma = new PrismaClient()

	try {
		await prisma.event.delete({
			where: { id },
		})

		revalidatePath('/admin/events')
		return { success: true, message: 'Usunięto' }
	} catch (error) {
		return { success: false, message: 'Nie udało się usunąć wydarzenia' }
	}
}
