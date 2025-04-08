import { z } from 'zod'

//schema for inserting events

export const insertEventSchema = z.object({
	name: z.string().min(1, { message: 'Nazwa jest wymagana' }),
	color: z.string().min(1, { message: 'Kolor jest wymagany' }),
	signUpUrl: z.string().min(1, { message: 'URL zapisów jest wymagany' }),
	eventDate: z.string().min(1, { message: 'Data wydarzenia jest wymagana' }),
	description: z.string().min(1, { message: 'Opis jest wymagany' }),
	eventHour: z.string().min(1, { message: 'Godzina wydarzenia jest wymagana' }),
})
