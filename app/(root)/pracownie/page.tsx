import React from 'react'
// import Image from 'next/image'
// import wood from '@/public/images/wood.png'
// import ceramics from '@/public/images/ceramics.png'
// import tailoring from '@/public/images/tailoring.png'
// import children from '@/public/images/children.png'
// import woman from '@/public/images/woman.png'
// import city from '@/public/images/city.png'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'
import Footer from '@/components/Footer'

export const metadata = {
	title: 'FMP | Pracownie',
}

const linkStyle =
	'flex items-center justify-center text-center font-montserrat text-[26px] tracking-wider font-bold text-gray-900 mt-4 mb-10 w-[250px] h-[250px] rounded-full shadow-lg'

const WorkshopsPage = () => {
	return (
		<>
			<div className='absolute top-6 left-6'>
				<Navigation hidden='workshops' />
			</div>

			<PageTitle title='warsztaty' />

			<div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center md:grid-cols-3 gap-8 mt-20  md:px-40 px-20 xl:w-[70vw] mx-auto pb-40'>
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
			<Footer />
		</>
	)
}

export default WorkshopsPage
