'use server'

import { PrismaClient } from '@prisma/client'

// Get latest events

export async function getLatestEvents() {
	const prisma = new PrismaClient()

	const data = await prisma.event.findMany()

	return data
}
