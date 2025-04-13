import { auth } from '@/auth'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getEventsSummary } from '@/lib/actions/event.action'
import { Metadata } from 'next'
import { redirect } from 'next/dist/server/api-utils'
import { GrWorkshop } from 'react-icons/gr'
import { requireAdmin } from '@/lib/auth-guard'
import dayjs from 'dayjs'
import { formatDate } from '@/utils'

export const metadata: Metadata = {
	title: 'Admin',
}

const AdminOverviewPage = async () => {
	await requireAdmin()
	const session = await auth()
	const currentDate = dayjs()
	const summary = await getEventsSummary()

	const endedWorkshops = summary.filter(
		item => item.eventDate < currentDate.format('YYYY-MM-DD')
	)

	const futureWorkshops = summary.filter(
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
						<div className='text-2xl font-bold'>{summary.length}</div>
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
			</div>
		</div>
	)
}

export default AdminOverviewPage
