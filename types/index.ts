import { z } from 'zod'
import { insertEventSchema } from '@/lib/validators'

export type Event = z.infer<typeof insertEventSchema> & {
	id?: string
}
