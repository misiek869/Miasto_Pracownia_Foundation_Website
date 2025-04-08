import Calendar from '@/components/Calendar'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'

const CalendarPage = () => {
	return (
		<>
			<div className='min-h-screen relative bg-slate-50 flex flex-col pt-20 xl:pt-20'>
				<div className='fixed top-6 left-6'>
					<Navigation hidden='calendar' />
				</div>
				<PageTitle title='kalendarz warsztatów' />
				<Calendar />

				<Footer />
			</div>
		</>
	)
}

export default CalendarPage
