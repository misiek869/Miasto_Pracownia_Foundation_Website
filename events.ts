import { v4 as uuidv4 } from 'uuid'

export type Event = {
	id: string
	name: string
	color: string
	signUpUrl: string
	eventDate: string
}

export const events: Event[] = [
	{
		id: uuidv4(),
		name: 'Pracownia Drewna',
		color: '#a18a4c',
		signUpUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		eventDate: '2025-04-11',
	},
	{
		id: uuidv4(),
		name: 'Pracownia Krawiecka',
		color: '#bb6ec2',
		signUpUrl:
			'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		eventDate: '2025-04-15',
	},
	{
		id: uuidv4(),
		name: 'Pracownia Ceramiczna',
		color: '#3f5069',
		signUpUrl:
			'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		eventDate: '2025-04-16',
	},
	{
		id: uuidv4(),
		name: 'Pracownia kobiet',
		color: '#bd338a',
		signUpUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		eventDate: '2025-04-19',
	},
]

// export const events = [
// 	{
// 		id: uuidv4(),
// 		name: 'Wood',
// 		signUpUrl:
// 			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// 		eventDate: '2025-04-11T13:00',
// 	},
// 	{
// 		id: uuidv4(),
// 		name: 'Flowers',
// 		signUpUrl:
// 			'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// 		eventDate: '2025-04-15T13:00',
// 	},
// 	{
// 		id: uuidv4(),
// 		name: 'Robotics',
// 		signUpUrl:
// 			'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// 		eventDate: '2025-04-16T13:00',
// 	},
// 	{
// 		id: uuidv4(),
// 		name: 'Woman',
// 		signUpUrl:
// 			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// 		eventDate: '2025-04-19T13:00',
// 	},
// ]
