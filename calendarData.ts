import { v4 as uuidv4 } from 'uuid'

export type PopoverContent = {
	id: string
	firstName: string
	secondName: string
	bgColor: string
	description: string
	link: string
}

export const popoverData: PopoverContent[] = [
	{
		id: uuidv4(),
		firstName: 'Pracownia',
		secondName: 'Drewna',
		bgColor: '#a65f00',
		description: `The placeholder text, beginning with the line “Lorem ipsum dolor
								sit amet, consectetur adipiscing elit”, looks like Latin because
								in its youth, centuries ago, it was Latin.`,
		link: '/pracownie/pracownia_drewna',
	},
	{
		id: uuidv4(),
		firstName: 'Pracownia',
		secondName: 'Krawiecka',
		bgColor: '#0084d1',
		description: `The placeholder text, beginning with the line “Lorem ipsum dolor
								sit amet, consectetur adipiscing elit”, looks like Latin because
								in its youth, centuries ago, it was Latin.`,
		link: '#',
	},
	{
		id: uuidv4(),
		firstName: 'Pracownia',
		secondName: 'Ceramiczna',
		bgColor: '#fcc800',
		description: `The placeholder text, beginning with the line “Lorem ipsum dolor
								sit amet, consectetur adipiscing elit”, looks like Latin because
								in its youth, centuries ago, it was Latin.`,
		link: '#',
	},
	{
		id: uuidv4(),
		firstName: 'Pracownia',
		secondName: 'Kobiet',
		bgColor: '#f6339a',
		description: `The placeholder text, beginning with the line “Lorem ipsum dolor
								sit amet, consectetur adipiscing elit”, looks like Latin because
								in its youth, centuries ago, it was Latin.`,
		link: '#',
	},
	{
		id: uuidv4(),
		firstName: 'Pracownia',
		secondName: 'Dzieci',
		bgColor: '#ff6900',
		description: `The placeholder text, beginning with the line “Lorem ipsum dolor
								sit amet, consectetur adipiscing elit”, looks like Latin because
								in its youth, centuries ago, it was Latin.`,
		link: '#',
	},
	{
		id: uuidv4(),
		firstName: 'Pracownia',
		secondName: 'w Mieście',
		bgColor: '#5ea500',
		description: `The placeholder text, beginning with the line “Lorem ipsum dolor
								sit amet, consectetur adipiscing elit”, looks like Latin because
								in its youth, centuries ago, it was Latin.`,
		link: '#',
	},
]
