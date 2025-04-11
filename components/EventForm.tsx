'use client'

import { Event } from '@/types'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { insertEventSchema, updateEventSchema } from '@/lib/validators'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from './ui/form'

type EventFormProps = {
	type: 'create' | 'update'
	event?: Event
	eventId?: string
}

export const eventDefaultValues = {
	name: '',
	color: '',
	signUpUrl: '',
	eventDate: '',
	description: '',
	eventHour: '',
}

const EventForm = ({ type, event, eventId }: EventFormProps) => {
	const router = useRouter()
	const form = useForm<z.infer<typeof insertEventSchema>>({
		resolver:
			type === 'update'
				? zodResolver(updateEventSchema)
				: zodResolver(insertEventSchema),
		defaultValues: event && type === 'update' ? event : eventDefaultValues,
	})

	return (
		<Form {...form}>
			<form className='space-y-8'>
				<div className='flex flex-col gap-5 md:flex-row'>
					{/* name */}
					{/* desc */}
				</div>
				<div className='flex flex-col gap-5 md:flex-row'>
					{/* color */}
					{/* url */}
				</div>
				<div className='flex flex-col gap-5 md:flex-row'>
					{/* date */}
					{/* hour */}
				</div>
			</form>
		</Form>
	)
}

export default EventForm
