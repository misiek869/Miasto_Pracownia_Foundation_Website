import { cn } from '@/lib/utils'
import { generateDate } from '@/utils'
import { v4 as uuidv4 } from 'uuid'

const events = [
	{
		id: 1,
		name: 'Leslie Alexander',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		startDatetime: '2022-05-11T13:00',
		endDatetime: '2022-05-11T14:30',
	},
	{
		id: 2,
		name: 'Michael Foster',
		imageUrl:
			'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		startDatetime: '2022-05-20T09:00',
		endDatetime: '2022-05-20T11:30',
	},
	{
		id: 3,
		name: 'Dries Vincent',
		imageUrl:
			'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		startDatetime: '2022-05-20T17:00',
		endDatetime: '2022-05-20T18:30',
	},
	{
		id: 4,
		name: 'Leslie Alexander',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		startDatetime: '2022-06-09T13:00',
		endDatetime: '2022-06-09T14:30',
	},
	{
		id: 5,
		name: 'Michael Foster',
		imageUrl:
			'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		startDatetime: '2022-05-13T14:00',
		endDatetime: '2022-05-13T14:30',
	},
]

const Calendar = () => {
	const days = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Ndz']

	console.log(generateDate())

	return (
		<div className='w-96 h-96'>
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
				{generateDate().map(day => {
					const { date, currentMonth, today } = day

					return (
						<div
							key={uuidv4()}
							className='h-14 border-t grid place-content-center text-sm'>
							<h1
								className={cn(
									currentMonth ? '' : 'text-gray-400',
									today
										? 'bg-rose-500 rounded-full font-semibold text-white'
										: '',
									'h-10 w-10 grid place-content-center'
								)}>
								{date.date()}
							</h1>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Calendar
