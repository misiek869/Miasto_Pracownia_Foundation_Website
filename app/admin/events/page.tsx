import { requireAdmin } from '@/lib/auth-guard'
import { auth } from '@/auth'
import { deleteEvent, getAllOrders } from '@/lib/actions/event.action'
import { formatId } from '@/lib/utils'
import { Metadata } from 'next'
import Link from 'next/link'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import Pagination from '@/components/Pagination'
import DeleteDialog from '@/components/DeleteDialog'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
	title: 'Admin Warsztaty',
}

const AdminEventsPage = async (props: {
	searchParams: Promise<{ page: string }>
}) => {
	await requireAdmin()
	const { page = '1' } = await props.searchParams
	const session = await auth()

	if (session?.user?.role !== 'admin') {
		throw new Error('User must be admin')
	}

	const events = await getAllOrders({
		page: Number(page),
		limit: 4,
	})

	return (
		<div className='space-y-2'>
			<h2 className='h2-bold'>Orders</h2>
			<div className='overflow-x-auto'>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>ID</TableHead>
							<TableHead>NAZWA</TableHead>
							<TableHead>DATA</TableHead>
							<TableHead>GODZINA</TableHead>
							<TableHead className='flex items-center justify-end'>
								EDYCJA
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{events.data.map(event => (
							<TableRow key={event.id}>
								<TableCell>{formatId(event.id)}</TableCell>
								<TableCell>{event.name}</TableCell>
								<TableCell>{event.eventDate}</TableCell>
								<TableCell>{event.eventHour}</TableCell>
								<TableCell className='flex gap-x-4 justify-end'>
									<Button asChild variant='outline' size='sm'>
										<Link href={`/admin/events/${event.id}`}>Edytuj</Link>
									</Button>
									<DeleteDialog id={event.id} action={deleteEvent} />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				{events.totalPages > 1 && (
					<Pagination
						page={Number(page) || 1}
						totalPages={events?.totalPages}
					/>
				)}
			</div>
		</div>
	)
}

export default AdminEventsPage
