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

const Calendar = () => {
	dayjs.locale('pl')
	const days = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Ndz']
	const currentDate = dayjs()
	const [today, setToday] = useState(currentDate)
	const [selectDate, setSelectDate] = useState(currentDate)
	const [event, setEvent] = useState<EventType | undefined>(undefined)

	console.log(currentDate)

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
							event => event.eventDate === formatDate(date.add(1, 'day'))
						)
						const eventColor = event ? event.color : ''

						return (
							<div
								key={uuidv4()}
								className='h-14 md:h-21 lg:h-28 border-t grid place-content-center text-sm'>
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
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-between w-full mt-6'>
					<Popover>
						<PopoverTrigger className='flex mx-auto h-24 w-24 md:p-14 rounded-full items-center justify-center bg-[#a18a4c] cursor-pointer'>
							<p className='text-center text-sm lg:text-md text-slate-100 font-semibold tracking-wider'>
								Pracownia
								<br />
								Drewna
							</p>
						</PopoverTrigger>
						<PopoverContent className='border-2 border-rose-500 relative pb-12'>
							<p className='text-justify'>
								The placeholder text, beginning with the line “Lorem ipsum dolor
								sit amet, consectetur adipiscing elit”, looks like Latin because
								in its youth, centuries ago, it was Latin.
							</p>
							<Link
								className='text-rose-500 absolute bottom-4 right-4'
								href={'#'}>
								Dowiedz się Więcej
							</Link>
						</PopoverContent>
					</Popover>
					<Popover>
						<PopoverTrigger className='flex mx-auto h-24 w-24 md:p-14 rounded-full items-center justify-center bg-[#a18a4c] cursor-pointer'>
							<p className='text-center text-sm lg:text-md text-slate-100 font-semibold tracking-wider'>
								Pracownia
								<br />
								Drewna
							</p>
						</PopoverTrigger>
						<PopoverContent className='border-2 border-rose-500 relative pb-12'>
							<p className='text-justify'>
								The placeholder text, beginning with the line “Lorem ipsum dolor
								sit amet, consectetur adipiscing elit”, looks like Latin because
								in its youth, centuries ago, it was Latin.
							</p>
							<Link
								className='text-rose-500 absolute bottom-4 right-4'
								href={'#'}>
								Dowiedz się Więcej
							</Link>
						</PopoverContent>
					</Popover>
					<Popover>
						<PopoverTrigger className='flex mx-auto h-24 w-24 md:p-14 rounded-full items-center justify-center bg-[#a18a4c] cursor-pointer'>
							<p className='text-center text-sm lg:text-md text-slate-100 font-semibold tracking-wider'>
								Pracownia
								<br />
								Drewna
							</p>
						</PopoverTrigger>
						<PopoverContent className='border-2 border-rose-500 relative pb-12'>
							<p className='text-justify'>
								The placeholder text, beginning with the line “Lorem ipsum dolor
								sit amet, consectetur adipiscing elit”, looks like Latin because
								in its youth, centuries ago, it was Latin.
							</p>
							<Link
								className='text-rose-500 absolute bottom-4 right-4'
								href={'#'}>
								Dowiedz się Więcej
							</Link>
						</PopoverContent>
					</Popover>
					<Popover>
						<PopoverTrigger className='flex mx-auto h-24 w-24 md:p-14 rounded-full items-center justify-center bg-[#a18a4c] cursor-pointer'>
							<p className='text-center text-sm lg:text-md text-slate-100 font-semibold tracking-wider'>
								Pracownia
								<br />
								Drewna
							</p>
						</PopoverTrigger>
						<PopoverContent className='border-2 border-rose-500 relative pb-12'>
							<p className='text-justify'>
								The placeholder text, beginning with the line “Lorem ipsum dolor
								sit amet, consectetur adipiscing elit”, looks like Latin because
								in its youth, centuries ago, it was Latin.
							</p>
							<Link
								className='text-rose-500 absolute bottom-4 right-4'
								href={'#'}>
								Dowiedz się Więcej
							</Link>
						</PopoverContent>
					</Popover>
					<Popover>
						<PopoverTrigger className='flex mx-auto h-24 w-24 md:p-14 rounded-full items-center justify-center bg-[#a18a4c] cursor-pointer'>
							<p className='text-center text-sm lg:text-md text-slate-100 font-semibold tracking-wider'>
								Pracownia
								<br />
								Drewna
							</p>
						</PopoverTrigger>
						<PopoverContent className='border-2 border-rose-500 relative pb-12'>
							<p className='text-justify'>
								The placeholder text, beginning with the line “Lorem ipsum dolor
								sit amet, consectetur adipiscing elit”, looks like Latin because
								in its youth, centuries ago, it was Latin.
							</p>
							<Link
								className='text-rose-500 absolute bottom-4 right-4'
								href={'#'}>
								Dowiedz się Więcej
							</Link>
						</PopoverContent>
					</Popover>
					<Popover>
						<PopoverTrigger className='flex mx-auto h-24 w-24 md:p-14 rounded-full items-center justify-center bg-[#a18a4c] cursor-pointer'>
							<p className='text-center text-sm lg:text-md text-slate-100 font-semibold tracking-wider'>
								Pracownia
								<br />
								Drewna
							</p>
						</PopoverTrigger>
						<PopoverContent className='border-2 border-rose-500 relative pb-12'>
							<p className='text-justify'>
								The placeholder text, beginning with the line “Lorem ipsum dolor
								sit amet, consectetur adipiscing elit”, looks like Latin because
								in its youth, centuries ago, it was Latin.
							</p>
							<Link
								className='text-rose-500 absolute bottom-4 right-4'
								href={'#'}>
								Dowiedz się Więcej
							</Link>
						</PopoverContent>
					</Popover>
					<Popover>
						<PopoverTrigger className='flex mx-auto h-24 w-24 md:p-14 rounded-full items-center justify-center bg-[#a18a4c] cursor-pointer'>
							<p className='text-center text-sm lg:text-md text-slate-100 font-semibold tracking-wider'>
								Pracownia
								<br />
								Drewna
							</p>
						</PopoverTrigger>
						<PopoverContent className='border-2 border-rose-500 relative pb-12'>
							<p className='text-justify'>
								The placeholder text, beginning with the line “Lorem ipsum dolor
								sit amet, consectetur adipiscing elit”, looks like Latin because
								in its youth, centuries ago, it was Latin.
							</p>
							<Link
								className='text-rose-500 absolute bottom-4 right-4'
								href={'#'}>
								Dowiedz się Więcej
							</Link>
						</PopoverContent>
					</Popover>
					<Popover>
						<PopoverTrigger className='flex mx-auto h-24 w-24 md:p-14 rounded-full items-center justify-center bg-[#a18a4c] cursor-pointer'>
							<p className='text-center text-sm lg:text-md text-slate-100 font-semibold tracking-wider'>
								Pracownia
								<br />
								Drewna
							</p>
						</PopoverTrigger>
						<PopoverContent className='border-2 border-rose-500 relative pb-12'>
							<p className='text-justify'>
								The placeholder text, beginning with the line “Lorem ipsum dolor
								sit amet, consectetur adipiscing elit”, looks like Latin because
								in its youth, centuries ago, it was Latin.
							</p>
							<Link
								className='text-rose-500 absolute bottom-4 right-4'
								href={'#'}>
								Dowiedz się Więcej
							</Link>
						</PopoverContent>
					</Popover>
				</div>
			</div>

			<div className='h-96 w-96 px-5 hidden mt-6'>
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
