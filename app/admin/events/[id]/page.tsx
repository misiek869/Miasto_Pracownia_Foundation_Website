import NotFoundPage from '@/app/not-found'
import EventForm from '@/components/EventForm'
import { getSingleEventById } from '@/lib/actions/event.action'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Edycja Warsztatu',
}

const AdminEventEditPage = async (props: {
	params: Promise<{ id: string }>
}) => {
	const { id } = await props.params

	const event = await getSingleEventById(id)

	if (!event) {
		return <NotFoundPage />
	}

	return (
		<div className='space-y-8 max-w-5xl mx-auto'>
			<h1 className='text-xl font-bold tracking-wider'>Edycja Warsztatu</h1>
			<EventForm type='update' event={event} eventId={event.id} />
		</div>
	)
}

export default AdminEventEditPage
