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
