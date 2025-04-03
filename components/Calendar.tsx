'use client'

import { cn } from '@/lib/utils'
import { formatDate, generateDate, months } from '@/utils'
import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/pl'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { events } from '@/events'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { Event as EventType } from '@/events'
import Link from 'next/link'
import { Button } from './ui/button'

import { LuMessageCircleMore } from 'react-icons/lu'

const Calendar = () => {
	dayjs.locale('pl')
	const days = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Ndz']
	const currentDate = dayjs()
	const [today, setToday] = useState(currentDate)
	const [selectDate, setSelectDate] = useState(currentDate)
	const [event, setEvent] = useState<EventType | undefined>(undefined)

	return (
		<div className='flex mx-auto items-center justify-center  lg:flex-row flex-col mt-10'>
			<div className='w-96 h-96 md:h-144 md:w-144 lg:w-192 lg:h-192 '>
				<div className=' flex justify-between'>
					<h1 className='font-semibold'>
						{months[today.month()]} {today.year()}
					</h1>
					<div className='flex items-center gap-4'>
						<GrFormPrevious
							className='w-6 h-6 lg:w-10 lg:h-10 hover:text-rose-500 transition-all cursor-pointer'
							onClick={() => setToday(today.month(today.month() - 1))}
						/>
						<p
							className='cursor-pointer lg:text-lg'
							onClick={() => setToday(currentDate)}>
							Dzisiaj
						</p>
						<GrFormNext
							className='w-6 h-6 lg:w-10 lg:h-10 hover:text-rose-500 transition-all cursor-pointer'
							onClick={() => setToday(today.month(today.month() + 1))}
						/>
					</div>
				</div>
				<div className='w-full grid grid-cols-7 text-md font-semibold'>
					{days.map((day, index) => {
						return (
							<h1
								className='h-14 grid place-content-center lg:text-xl lg:font-bold'
								key={index}>
								{day}
							</h1>
						)
					})}
				</div>
				<div className='w-full grid grid-cols-7'>
					{generateDate(today.month(), today.year()).map(day => {
						const { date, currentMonth, today } = day

						const event = events.find(
							event => event.eventDate === formatDate(date)
						)
						const eventColor = event ? event.color : ''

						return (
							<div
								key={uuidv4()}
								className='h-14 md:h-21 lg:h-28 border-t grid place-content-center text-sm relative'>
								<h1
									className={cn(
										currentMonth ? '' : 'text-gray-400',
										today
											? 'border-2 border-rose-500 rounded-full text-black'
											: '',

										// selectDate.toDate().toDateString() ===
										// 	date.toDate().toDateString()
										// 	? 'bg-blue-500 text-white'
										// 	: '',
										'h-10 w-10 grid place-content-center lg:text-xl transition-all rounded-full ',
										event ? 'font-semibold' : ''
									)}
									style={{
										backgroundColor: event ? eventColor : '',
										color: event ? 'white' : '',
									}}
									onClick={() => {
										setSelectDate(date)
										setEvent(event)
									}}>
									{date.date()}
								</h1>
								{event ? (
									<div className='hidden lg:block mx-auto absolute right-3 top-3.5 '>
										<Popover>
											<PopoverTrigger>
												<LuMessageCircleMore className='w-7 h-7 cursor-pointer text-rose-500' />
											</PopoverTrigger>
											<PopoverContent>
												<div className=''>
													<h1 className='font-semibold text-sm'>
														{event.name} {event.eventDate}
													</h1>
													<p className='text-sm'>godz: {event.eventHour}</p>
													<p className='text-xs mt-4'>{event.description}</p>
													<Button
														className='mt-4'
														variant={'outline'}
														size={'sm'}>
														<Link href={'#'}>Zapisz się na warsztat</Link>
													</Button>
												</div>
											</PopoverContent>
										</Popover>
									</div>
								) : (
									''
								)}
							</div>
						)
					})}
				</div>
			</div>
			<div className='h-96 w-96 px-5 bg-red-400 lg:hidden'>
				<h1 className='font-semibold capitalize'>
					{selectDate.format('dddd D MMMM YYYY')}
				</h1>

				{event !== undefined ? (
					<article>
						<h2>{event?.name}</h2>
						<Button variant={'outline'} size={'default'}>
							<Link href={'#'}>Zapisz się na warsztat</Link>
						</Button>
					</article>
				) : (
					<h2>W tym dniu nie ma warsztatów</h2>
				)}
			</div>
		</div>
	)
}

export default Calendar
