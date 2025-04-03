import Calendar from '@/components/Calendar'
import Navigation from '@/components/Navigation'

const CalendarPage = () => {
	return (
		<div className='px-8 bg-[var(--primary)]'>
			<div className='absolute top-6 left-6'>
				<Navigation hidden='calendar' />
			</div>
			<Calendar />
		</div>
	)
}

export default CalendarPage
