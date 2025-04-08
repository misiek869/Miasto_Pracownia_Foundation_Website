'use server'

import { PrismaClient } from '@prisma/client'
import { convertToPlainObject } from '../utils'

// Get latest events

export async function getLatestEvents() {
	const prisma = new PrismaClient()

	const data = await prisma.event.findMany()

	return convertToPlainObject(data)
}
