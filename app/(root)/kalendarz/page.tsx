import Calendar from '@/components/Calendar'
import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'

const CalendarPage = () => {
	return (
		<div className='px-8 bg-[var(--primary)] pt-20 min-h-screen '>
			<div className='absolute top-6 left-6'>
				<Navigation hidden='calendar' />
			</div>
			<PageTitle title='kalendarz warsztatów' />
			<Calendar />
		</div>
	)
}

export default CalendarPage

{
	/* <div
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
							</div> */
}
