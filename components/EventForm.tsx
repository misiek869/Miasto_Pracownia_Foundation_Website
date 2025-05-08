'use client'

import { z } from 'zod'
import { Event } from '@/types'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { format } from 'date-fns'
import { FieldValues, Resolver, SubmitHandler, useForm } from 'react-hook-form'
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
import { Popover, PopoverTrigger } from './ui/popover'
import { cn } from '@/lib/utils'
import { Calendar1Icon } from 'lucide-react'
import { CiClock2 } from 'react-icons/ci'
import { PopoverContent } from '@radix-ui/react-popover'
import { Calendar } from '@/components/ui/calendar'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

type EventFormProps = {
	type: 'create' | 'update'
	event?: Event
	eventId?: string
}

export const eventDefaultValues: EventFormValues = {
	name: '',
	color: '',
	signUpUrl: '',
	eventDate: '',
	description: '',
	eventHour: '',
}

type EventFormValues = {
	id?: string
	name: string
	color: string
	signUpUrl: string
	description: string
	eventDate: string
	eventHour: string
} & FieldValues

const createResolver = <T extends z.ZodTypeAny>(schema: T) => {
	return zodResolver(schema) as Resolver<EventFormValues>
}

const EventForm = ({ type, event, eventId }: EventFormProps) => {
	const router = useRouter()
	const form = useForm<EventFormValues>({
		resolver:
			type === 'update'
				? createResolver(updateEventSchema)
				: createResolver(insertEventSchema),
		defaultValues: event && type === 'update' ? event : eventDefaultValues,
	})

	const onSubmit: SubmitHandler<EventFormValues> = async values => {
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

	function handleDateSelect(date: Date | undefined) {
		if (date) {
			const formattedDate = date.toISOString().split('T')[0]

			form.setValue('eventDate', formattedDate)
		}
	}
	function handleTimeChange(type: 'hour' | 'minute', value: string) {
		const currentTime = form.getValues('eventHour') || '00:00'
		const [currentHour, currentMinute] = currentTime.split(':')

		let newHour = currentHour
		let newMinute = currentMinute

		if (type === 'hour') {
			newHour = value.padStart(2, '0')
		} else if (type === 'minute') {
			newMinute = value.padStart(2, '0')
		}

		const newTime = `${newHour}:${newMinute}`

		form.setValue('eventHour', newTime)
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
					{/* event date */}
					<FormField
						control={form.control}
						name='eventDate'
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormLabel>Data warsztatu</FormLabel>

								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant={'outline'}
												className={cn(
													'w-full pl-3 text-left font-normal',
													!field.value && 'text-muted-foreground'
												)}>
												{field.value ? (
													format(field.value, 'yyyy/MM/dd')
												) : (
													<span>YYYY/MM/DD</span>
												)}
												<Calendar1Icon className='ml-auto h-4 w-4 opacity-50' />
											</Button>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent className='w-auto p-0'>
										<div className='sm:flex bg-white border rounded-xl mt-1'>
											<Calendar
												mode='single'
												selected={
													field.value ? new Date(field.value) : undefined
												}
												onSelect={handleDateSelect}
												initialFocus
											/>
										</div>
									</PopoverContent>
								</Popover>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* event hour */}
					<FormField
						control={form.control}
						name='eventHour'
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormLabel>Godzina warsztatu</FormLabel>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												type='button'
												variant={'outline'}
												className={cn(
													'w-full pl-3 text-left font-normal',
													!field.value && 'text-muted-foreground'
												)}>
												{field.value ? (
													field.value // Wyświetl wartość bez formatowania
												) : (
													<span>HH:mm</span>
												)}
												<CiClock2 className='ml-auto h-4 w-4 opacity-50' />
											</Button>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent>
										<div className='flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x bg-white mt-1 border rounded-xl'>
											<ScrollArea className='w-64 sm:w-auto'>
												<div className='flex sm:flex-col p-2'>
													{Array.from({ length: 24 }, (_, i) => i)
														.reverse()
														.map(hour => (
															<Button
																type='button'
																key={hour}
																size='icon'
																variant={'ghost'}
																className='sm:w-full shrink-0 aspect-square'
																onClick={() => {
																	handleTimeChange('hour', hour.toString())
																}}>
																{hour.toString().padStart(2, '0')}
															</Button>
														))}
												</div>
												<ScrollBar
													orientation='horizontal'
													className='sm:hidden'
												/>
											</ScrollArea>
											<ScrollArea className='w-64 sm:w-auto'>
												<div className='flex sm:flex-col p-2'>
													{Array.from({ length: 12 }, (_, i) => i * 5).map(
														minute => (
															<Button
																type='button'
																key={minute}
																size='icon'
																variant={'ghost'}
																className='sm:w-full shrink-0 aspect-square'
																onClick={() =>
																	handleTimeChange('minute', minute.toString())
																}>
																{minute.toString().padStart(2, '0')}
															</Button>
														)
													)}
												</div>
												<ScrollBar
													orientation='horizontal'
													className='sm:hidden'
												/>
											</ScrollArea>
										</div>
									</PopoverContent>
								</Popover>
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
											value='#a65f00'>
											<span className='bg-[#a65f00] w-6 h-6 rounded-full mr-2'></span>
											<p className='text-gray-900'>Pracownia Drewna</p>
										</SelectItem>
										<SelectItem
											className=' mb-2 cursor-pointer'
											value='#0084d1'>
											<span className='bg-[#0084d1] w-6 h-6 rounded-full mr-2'></span>
											<p className='text-gray-900'>Pracownia Krawiecka</p>
										</SelectItem>
										<SelectItem
											className=' mb-2 cursor-pointer'
											value='#fcc800'>
											<span className='bg-[#fcc800] w-6 h-6 rounded-full mr-2'></span>
											<p className='text-gray-900'>Pracownia Ceramiczna</p>
										</SelectItem>
										<SelectItem
											className=' mb-2 cursor-pointer'
											value='#f6339a'>
											<span className='bg-[#f6339a] w-6 h-6 rounded-full mr-2'></span>
											<p className='text-gray-900'>Pracownia Kobiet</p>
										</SelectItem>
										<SelectItem
											className=' mb-2 cursor-pointer'
											value='#ff6900'>
											<span className='bg-[#ff6900] w-6 h-6 rounded-full mr-2'></span>
											<p className='text-gray-900'>Pracownia Dzieci</p>
										</SelectItem>
										<SelectItem
											className=' mb-2 cursor-pointer'
											value='#5ea500'>
											<span className='bg-[#5ea500] w-6 h-6 rounded-full mr-2'></span>
											<p className='text-gray-900'>Pracownia w Mieście</p>
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

				<div className=''>
					<Button
						type={'submit'}
						variant={'secondary'}
						className='text-slate-50 col-span-2 w-full'
						disabled={form.formState.isSubmitting}>
						{type === 'create'
							? form.formState.isSubmitting
								? 'Dodawanie warsztatu...'
								: 'Utwórz warsztat'
							: form.formState.isSubmitting
							? 'Edycja warsztatu...'
							: 'Edytuj warsztat'}
					</Button>
				</div>
			</form>
		</Form>
	)
}

export default EventForm
