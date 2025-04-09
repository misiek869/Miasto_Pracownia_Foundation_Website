'use server'

import { PrismaClient } from '@prisma/client'
import { convertToPlainObject } from '../utils'
import { Prisma } from '@prisma/client'

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
