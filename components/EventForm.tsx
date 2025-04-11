'use client'

import { Event } from '@/types'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { ControllerRenderProps, SubmitHandler, useForm } from 'react-hook-form'
import z from 'zod'
import { insertEventSchema, updateEventSchema } from '@/lib/validators'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from './ui/form'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { createEvent, updateEvent } from '@/lib/actions/event.action'

type EventFormProps = {
	type: 'create' | 'update'
	event?: Event
	eventId?: string
}

export const eventDefaultValues = {
	id: undefined,
	name: '',
	color: '',
	signUpUrl: '',
	eventDate: '',
	description: '',
	eventHour: '',
}

type EventFormValues = {
	name: string
	color: string
	signUpUrl: string
	description: string
	eventDate: string
	eventHour: string
	id?: string
}

const EventForm = ({ type, event, eventId }: EventFormProps) => {
	const router = useRouter()
	const form = useForm<EventFormValues>({
		resolver:
			type === 'update'
				? zodResolver(updateEventSchema)
				: zodResolver(insertEventSchema),
		defaultValues: event && type === 'update' ? event : eventDefaultValues,
	})

	const onSubmit: SubmitHandler<EventFormValues> = async values => {
		// Logika tworzenia lub aktualizacji wydarzenia
		if (type === 'create') {
			const res = await createEvent(values)

			if (!res.success) {
				toast('Nie można utworzyć warsztatu')
			} else {
				toast(res.message)
				router.push('/admin/events')
			}
		}

		if (type === 'update') {
			if (!eventId) {
				router.push('/admin/events')
				return
			}

			const res = await updateEvent({ ...values, id: eventId })

			if (!res.success) {
				toast('Nie można zaktualizować warsztatu')
			} else {
				toast(res.message)
				router.push('/admin/events')
			}
		}
	}

	return (
		<Form {...form}>
			<form
				method='POST'
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8'>
				<div className='flex flex-col gap-5 md:flex-row'>
					{/* name */}
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormLabel>Nazwa</FormLabel>
								<FormControl>
									<Input placeholder='Wpisz nazwę warsztatu' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* link */}
					<FormField
						control={form.control}
						name='signUpUrl'
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormLabel>Link do zapisów</FormLabel>
								<FormControl>
									<Input placeholder='wklej link do zapisów' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className='flex flex-col gap-5 md:flex-row'>
					{/* name */}
					<FormField
						control={form.control}
						name='eventDate'
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormLabel>Data</FormLabel>
								<FormControl>
									<Input placeholder='Wpisz nazwę warsztatu' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* link */}
					<FormField
						control={form.control}
						name='eventHour'
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormLabel>Godzina</FormLabel>
								<FormControl>
									<Input placeholder='wklej link do zapisów' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className='flex flex-col gap-5 md:flex-row'>
					{/* color */}
					<FormField
						control={form.control}
						name='color'
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormLabel>Kolor</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}>
									<FormControl>
										<SelectTrigger className='w-full'>
											<SelectValue placeholder='Wybierz kolor' />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem
											className=' mb-2 cursor-pointer'
											value='#a18a4c'>
											<span className='bg-[#a18a4c] w-6 h-6 rounded-full mr-2'></span>
											<p className='text-gray-900'>Pracownia Drewna</p>
										</SelectItem>
										<SelectItem
											className=' mb-2 cursor-pointer'
											value='#bb6ec2'>
											<span className='bg-[#bb6ec2] w-6 h-6 rounded-full mr-2'></span>
											<p className='text-gray-900'>Pracownia Krawiecka</p>
										</SelectItem>
										<SelectItem
											className=' mb-2 cursor-pointer'
											value='#3f5069'>
											<span className='bg-[#3f5069] w-6 h-6 rounded-full mr-2'></span>
											<p className='text-gray-900'>Pracownia Ceramiczna</p>
										</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* desc */}
					<FormField
						control={form.control}
						name='description'
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormLabel>Opis</FormLabel>
								<FormControl>
									<Textarea
										className='resize-none'
										placeholder='Opis warsztatu'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className='flex flex-col gap-5 md:flex-row'>
					{/* link */}
					{/* <FormField
						control={form.control}
						name='signUpUrl'
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormLabel>Link do zapisów</FormLabel>
								<FormControl>
									<Input placeholder='wklej link do zapisów' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/> */}

					{/* eventHour and eventDate */}
				</div>
				<div className=''>
					<Button
						type={'submit'}
						variant={'secondary'}
						className='text-slate-50 col-span-2 w-full'
						disabled={form.formState.isSubmitting}>
						{form.formState.isSubmitting
							? 'Dodawanie warsztatu...'
							: 'Utwórz warsztat'}
					</Button>
				</div>
			</form>
		</Form>
	)
}

export default EventForm
