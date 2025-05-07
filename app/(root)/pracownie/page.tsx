import React from 'react'
import Link from 'next/link'
import PageTitle from '@/components/PageTitle'

export const metadata = {
	title: 'FMP | Pracownie',
}

const linkStyle =
	'flex items-center justify-center text-center font-montserrat text-xl lg:text-[26px] tracking-wider font-bold text-gray-900 mt-4 mb-4 md:w-[250px] md:h-[250px] h-[200px] w-[200px] rounded-full shadow-lg'

const WorkshopsPage = () => {
	return (
		<>
			<PageTitle title='warsztaty' />
			<div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center lg:grid-cols-3 gap-8 mt-10 xl:mt-20 mb-20 lg:mb-0 md:px-20 px-10 w-[90vw] xl:w-[70vw] xl:pb-20'>
				<Link
					href={'/pracownie/pracownia_drewna'}
					className={`${linkStyle} bg-yellow-700`}>
					Pracownia
					<br />
					Drewna
				</Link>

				<Link
					href={'/pracownie/pracownia_krawiecka'}
					className={`${linkStyle} bg-sky-600`}>
					Pracownia
					<br />
					Krawiecka
				</Link>
				<Link
					href={'/pracownie/pracownia_ceramiczna'}
					className={`${linkStyle} bg-yellow-400`}>
					Pracownia
					<br />
					Ceramiczna
				</Link>
				<Link
					href={'/pracownie/pracownia_kobiet'}
					className={`${linkStyle} bg-pink-500`}>
					Pracownia
					<br />
					Kobiet
				</Link>
				<Link
					href={'/pracownie/pracownia_dzieci'}
					className={`${linkStyle} bg-orange-500`}>
					Pracownia
					<br />
					Dzieci
				</Link>
				<Link
					href={'/pracownie/pracownia_miasto'}
					className={`${linkStyle} bg-lime-600`}>
					Pracownia
					<br />w Mieście
				</Link>
			</div>
		</>
	)
}

export default WorkshopsPage
