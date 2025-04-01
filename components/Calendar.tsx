'use client'

import { cn } from '@/lib/utils'
import { formatDate, generateDate, months } from '@/utils'
import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/pl' // Importuj język polski
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

const Calendar = () => {
	dayjs.locale('pl') // Ustaw język polski globalnie
	const days = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Ndz']
	const currentDate = dayjs() // Inicjalizuj bieżącą datę
	const [today, setToday] = useState(currentDate)
	const [selectDate, setSelectDate] = useState(currentDate)
	const [event, setEvent] = useState<EventType | undefined>(undefined)

	return (
		<div className='flex mx-auto  gap-8 h-screen items-center'>
			<div className='w-96 h-96'>
				<div className=' flex justify-between'>
					<h1 className='font-semibold'>
						{months[today.month()]} {today.year()}
					</h1>
					<div className='flex items-center gap-4'>
						<GrFormPrevious
							className='w-6 h-6 hover:text-rose-500 transition-all cursor-pointer'
							onClick={() => setToday(today.month(today.month() - 1))}
						/>
						<p className='cursor-pointer' onClick={() => setToday(currentDate)}>
							Dzisiaj
						</p>
						<GrFormNext
							className='w-6 h-6 hover:text-rose-500 transition-all cursor-pointer'
							onClick={() => setToday(today.month(today.month() + 1))}
						/>
					</div>
				</div>
				<div className='w-full grid grid-cols-7 text-md font-semibold'>
					{days.map((day, index) => {
						return (
							<h1 className='h-14 grid place-content-center' key={index}>
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
								className='h-14 border-t grid place-content-center text-sm'>
								<h1
									className={cn(
										currentMonth ? '' : 'text-gray-400',
										today
											? 'border border-2 border-rose-500 rounded-full text-black'
											: '',

										selectDate.toDate().toDateString() ===
											date.toDate().toDateString()
											? 'bg-blue-500 text-white'
											: '',
										'h-10 w-10 grid place-content-center hover:bg-gray-800 hover:text-white transition-all rounded-full cursor-pointer',
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
							</div>
						)
					})}
				</div>
			</div>
			<div className='h-96 w-96 px-5 border-l'>
				<h1 className='font-semibold capitalize'>
					{selectDate.format('dddd D MMMM YYYY')}
				</h1>

				{event !== undefined ? (
					<article>
						<h2>{event?.name}</h2>

						<Link href={'#'}>Zapisz się na warsztat</Link>
					</article>
				) : (
					<h2>W tym dniu nie ma warsztatów</h2>
				)}
			</div>
		</div>
	)
}

export default Calendar
