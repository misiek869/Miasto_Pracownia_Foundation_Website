import EventForm from '@/components/EventForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Utwórz warsztat',
}

const CreateEventPage = () => {
	return (
		<>
			<h1 className='text-xl font-bold tracking-wider'>Utwórz Warsztat</h1>
			<div className='my-8'>
				<EventForm type={'create'} />
			</div>
		</>
	)
}

export default CreateEventPage
