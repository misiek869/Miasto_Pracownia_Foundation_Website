import { v4 as uuidv4 } from 'uuid'

export type Event = {
	id?: string
	name: string
	color: string
	signUpUrl: string
	eventDate: string
	description: string
	eventHour: string
}

export const events: Event[] = [
	{
		id: uuidv4(),
		name: 'Pracownia Drewna',
		description:
			'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.',
		color: '#a18a4c',
		signUpUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		eventDate: '2025-04-11',
		eventHour: '18:00',
	},
	{
		id: uuidv4(),
		name: 'Pracownia Krawiecka',
		description:
			'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.',
		color: '#bb6ec2',
		signUpUrl:
			'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		eventDate: '2025-04-15',
		eventHour: '18:00',
	},
	{
		id: uuidv4(),
		name: 'Pracownia Ceramiczna',
		description:
			'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.',
		color: '#3f5069',
		signUpUrl:
			'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		eventDate: '2025-04-16',
		eventHour: '18:00',
	},
	{
		id: uuidv4(),
		name: 'Pracownia kobiet',
		description:
			'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.',
		color: '#bd338a',
		signUpUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		eventDate: '2025-04-19',
		eventHour: '18:00',
	},
	{
		id: uuidv4(),
		name: 'Pracownia kobiet',
		description:
			'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.',
		color: '#bd338a',
		signUpUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		eventDate: '2025-04-01',
		eventHour: '18:00',
	},
	{
		id: uuidv4(),
		name: 'Pracownia kobiet',
		description:
			'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.',
		color: '#bd338a',
		signUpUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		eventDate: '2025-04-06',
		eventHour: '18:00',
	},
]

export const seedEvents: Event[] = [
	{
		name: 'Pracownia Drewna',
		description:
			'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.',
		color: '#a18a4c',
		signUpUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		eventDate: '2025-04-11',
		eventHour: '18:00',
	},
	{
		name: 'Pracownia Krawiecka',
		description:
			'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.',
		color: '#bb6ec2',
		signUpUrl:
			'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		eventDate: '2025-04-15',
		eventHour: '18:00',
	},
	{
		name: 'Pracownia Ceramiczna',
		description:
			'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.',
		color: '#3f5069',
		signUpUrl:
			'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		eventDate: '2025-04-16',
		eventHour: '18:00',
	},
	{
		name: 'Pracownia kobiet',
		description:
			'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.',
		color: '#bd338a',
		signUpUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		eventDate: '2025-04-19',
		eventHour: '18:00',
	},
	{
		name: 'Pracownia kobiet',
		description:
			'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.',
		color: '#bd338a',
		signUpUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		eventDate: '2025-04-01',
		eventHour: '18:00',
	},
	{
		name: 'Pracownia kobiet',
		description:
			'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.',
		color: '#bd338a',
		signUpUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		eventDate: '2025-04-06',
		eventHour: '18:00',
	},
]
