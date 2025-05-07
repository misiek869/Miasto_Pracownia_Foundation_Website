import Calendar from '@/components/Calendar'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'
import { getLatestEvents } from '@/lib/actions/event.action'

export const metadata = {
	title: 'FMP | Kalendarz Warsztatów',
}

const CalendarPage = async () => {
	const events = await getLatestEvents()

	return (
		<div className='px-8 bg-[var(--primary)] pt-20 xl:pt-40 pb-20 min-h-screen relative flex flex-col items-center'>
			<div className='fixed top-6 left-6'>
				<Navigation hidden='calendar' />
			</div>
			<PageTitle title='kalendarz warsztatów' />
			<Calendar events={events} />

			<Footer linkActive={true} />
		</div>
	)
}

export default CalendarPage
