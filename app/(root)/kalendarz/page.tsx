import Calendar from '@/components/Calendar'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'

const CalendarPage = () => {
	return (
		<>
			<div className='absolute top-6 left-6'>
				<Navigation hidden='calendar' home={true} />
			</div>
			<div className='px-8 bg-[var(--primary)] pt-20 min-h-screen '>
				<PageTitle title='kalendarz warsztatów' />
				<Calendar />
				<Footer />
			</div>
		</>
	)
}

export default CalendarPage
