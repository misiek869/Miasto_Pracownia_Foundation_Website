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
		description: `Warsztaty rodzinne, podczas których wspólnie tworzymy drewniane konstrukcje – od prostych projektów po prawdziwe dzieła wyobraźni!`,
		link: '/pracownie/pracownia_drewna',
	},
	{
		id: uuidv4(),
		firstName: 'Pracownia',
		secondName: 'Krawiecka',
		bgColor: '#0084d1',
		description: `Kreatywne warsztaty krawieckie dla dzieci, dorosłych i całych rodzin! Niezależnie od wieku i doświadczenia – każdy może tu odkryć radość szycia i tworzenia wyjątkowych projektów własnymi rękami.`,
		link: '#',
	},
	{
		id: uuidv4(),
		firstName: 'Pracownia',
		secondName: 'Ceramiczna',
		bgColor: '#fcc800',
		description: `Warsztaty ceramiczne, podczas których odkrywamy magię pracy z gliną – od pierwszego dotyku, przez lepienie, aż po szkliwienie i wypalanie w piecu.`,
		link: '#',
	},
	{
		id: uuidv4(),
		firstName: 'Pracownia',
		secondName: 'Kobiet',
		bgColor: '#f6339a',
		description: `Przestrzeń stworzona z myślą o kobietach – pełna ciepła, zrozumienia i wzajemnego wsparcia. Nasze warsztaty to coś więcej niż tylko zajęcia – to czas dla Ciebie. `,
		link: '#',
	},
	{
		id: uuidv4(),
		firstName: 'Pracownia',
		secondName: 'Dzieci',
		bgColor: '#ff6900',
		description: `Przestrzeń stworzona z myślą o najmłodszych – pełna koloru, pomysłów i radości tworzenia. Każde zajęcia to nowa przygoda, nowy temat i nowe wyzwanie!`,
		link: '#',
	},
	{
		id: uuidv4(),
		firstName: 'Pracownia',
		secondName: 'w Mieście',
		bgColor: '#5ea500',
		description: `Projekt „Pracownia w mieście” to cykl warsztatów twórczych, które łączą kreatywność, praktyczność i sąsiedzką energię.`,
		link: '#',
	},
]
