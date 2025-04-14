import { auth } from '@/auth'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getEventsSummary } from '@/lib/actions/event.action'
import { Metadata } from 'next'
import { GrWorkshop } from 'react-icons/gr'
import { requireAdmin } from '@/lib/auth-guard'
import dayjs from 'dayjs'
import Charts from './charts'

export const metadata: Metadata = {
	title: 'Admin',
}

const AdminOverviewPage = async () => {
	await requireAdmin()
	const session = await auth()
	const currentDate = dayjs()
	const { events, eventsByMonth } = await getEventsSummary()
	console.log(eventsByMonth)

	const endedWorkshops = events.filter(
		item => item.eventDate < currentDate.format('YYYY-MM-DD')
	)

	const futureWorkshops = events.filter(
		item => item.eventDate >= currentDate.format('YYYY-MM-DD')
	)

	if (session?.user?.role !== 'admin') {
		throw new Error('User must be admin')
	}

	return (
		<div className='space-y-2'>
			<h1 className='text-xl font-bold'>Panel Administratora</h1>
			<div className='grid grid-cols-3 gap-x-4'>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>Warsztaty</CardTitle>
						<GrWorkshop />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>{events.length}</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>Zakończone</CardTitle>
						<GrWorkshop />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>{endedWorkshops.length}</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>Przyszłe</CardTitle>
						<GrWorkshop />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>{futureWorkshops.length}</div>
					</CardContent>
				</Card>
				<Card className='col-span-3 mt-4'>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>
							Liczba warsztatów w poszczególnych miesiącach
						</CardTitle>
					</CardHeader>
					<CardContent>
						<Charts
							data={{
								eventsByMonth: eventsByMonth,
							}}
						/>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

export default AdminOverviewPage
