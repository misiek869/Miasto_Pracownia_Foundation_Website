'use client'

import { cn } from '@/lib/utils'
import { formatDate, generateDate, months } from '@/utils'
import dayjs from 'dayjs'
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
import { popoverData } from '@/calendarData'

const Calendar = () => {
	dayjs.locale('pl')
	const days = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Ndz']
	const currentDate = dayjs()
	const [today, setToday] = useState(currentDate)
	const [selectDate, setSelectDate] = useState(currentDate)
	const [event, setEvent] = useState<EventType | undefined>(undefined)

	console.log(currentDate)

	return (
		<div className='mt-20 flex flex-col xl:flex-row mx-auto justify-center xl:gap-x-16 pb-40'>
			<div className='w-96 h-96 md:h-144 md:w-144 lg:w-192 lg:h-192 xl:w-192 xl:h-144  xl:p-4 '>
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
							event => event.eventDate === formatDate(date.add(1, 'day'))
						)
						const eventColor = event ? event.color : ''

						return (
							<div
								key={uuidv4()}
								className='h-14 md:h-21 lg:h-28 xl:h-20 border-t grid place-content-center text-sm'>
								{event ? (
									<Popover>
										<PopoverTrigger
											className='h-10 w-10 grid place-content-center lg:text-xl transition-all rounded-full cursor-pointer'
											style={{
												backgroundColor: event ? eventColor : '',
												color: event ? 'white' : '',
											}}>
											{date.date()}
										</PopoverTrigger>
										<PopoverContent>
											<div className=''>
												<h1 className='font-semibold text-sm'>
													{event.name} {event.eventDate}
												</h1>
												<p className='text-sm'>godz: {event.eventHour}</p>
												<p className='text-xs mt-4'>{event.description}</p>
												{event.eventDate > formatDate(currentDate) ? (
													<Button
														className='mt-4'
														variant={'outline'}
														size={'sm'}>
														<Link href={'#'}>Zapisz się na warsztat</Link>
													</Button>
												) : (
													''
												)}
											</div>
										</PopoverContent>
									</Popover>
								) : (
									<h1
										className={cn(
											currentMonth ? '' : 'text-gray-400',
											today
												? 'border-2 border-rose-500 rounded-full text-black'
												: '',
											'h-10 w-10 grid place-content-center lg:text-xl transition-all rounded-full ',
											event ? 'font-semibold' : ''
										)}>
										{date.date()}
									</h1>
								)}
							</div>
						)
					})}
				</div>
			</div>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-2 justify-between w-full xl:w-1/2 mt-12 lg:mt-6'>
				{popoverData.map(item => {
					const { id, firstName, secondName, bgColor, description, link } = item

					return (
						<Popover key={id}>
							<PopoverTrigger
								style={{ backgroundColor: bgColor }}
								className={`flex mx-auto h-24 w-24 md:p-14 rounded-full items-center justify-center cursor-pointer hover:scale-110 duration-300`}>
								<p className='text-center text-sm lg:text-md text-slate-50 font-semibold tracking-wider'>
									{firstName}
									<br />
									{secondName}
								</p>
							</PopoverTrigger>
							<PopoverContent className='border-2 border-rose-300 relative pb-12'>
								<p className='text-justify'>{description}</p>
								<Link
									className='text-rose-300 absolute bottom-4 right-4'
									href={link}>
									Dowiedz się Więcej
								</Link>
							</PopoverContent>
						</Popover>
					)
				})}
			</div>
		</div>
	)
}

export default Calendar
