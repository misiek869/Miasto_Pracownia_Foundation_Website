import { auth } from '@/auth'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getEventsSummary } from '@/lib/actions/event.action'
import { Metadata } from 'next'
import { redirect } from 'next/dist/server/api-utils'
import { GrWorkshop } from 'react-icons/gr'

export const metadata: Metadata = {
	title: 'Admin',
}

const AdminOverviewPage = async () => {
	const session = await auth()

	console.log(session)

	if (session?.user?.role !== 'admin') {
		throw new Error('User must be admin')
	}

	const summary = await getEventsSummary()

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
						<div className='text-2xl font-bold'>{summary}</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>Zakończone</CardTitle>
						<GrWorkshop />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>{summary}</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>Przyszłe</CardTitle>
						<GrWorkshop />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>{summary}</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

export default AdminOverviewPage
