import Image from 'next/image'
import React from 'react'
import wood from '@/public/images/wood.jpg'
import ceramics from '@/public/images/ceramics.jpg'
import tailoring from '@/public/images/tailoring.jpg'
import children from '@/public/images/children.jpg'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'
import Footer from '@/components/Footer'

export const metadata = {
	title: 'Pracownie',
}

const WorkshopsPage = () => {
	return (
		<>
			<div className='absolute top-6 left-6'>
				<Navigation hidden='workshops' />
			</div>

			<PageTitle title='nasze pracownie' />
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20  md:px-40 px-20 xl:w-[70vw] mx-auto pb-40'>
				<div className='mb-10'>
					<Link href={'/pracownie/pracownia_drewna'}>
						<Image
							src={wood}
							alt='wood photo'
							width={125}
							height={125}
							className='rounded-full mx-auto h-[125px] sm:h-[175px] sm:w-[175px] md:h-[200px] md:w-[200px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px]'
						/>
						<p className='text-center font-montserrat text-2xl tracking-wide font-semibold text-gray-700 mt-4'>
							Drewna
						</p>
					</Link>
				</div>
				<div className='mb-10'>
					<Link href={'/pracownie/pracownia_krawiecka'}>
						<Image
							src={tailoring}
							alt='tailoring equipment photo'
							width={125}
							height={125}
							className='rounded-full mx-auto h-[125px] sm:h-[175px] sm:w-[175px] md:h-[200px] md:w-[200px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px]'
						/>
						<p className='text-center font-montserrat text-2xl tracking-wide font-semibold text-gray-700 mt-4'>
							Krawiecka
						</p>
					</Link>
				</div>
				<div className='mb-10'>
					<Link href={'/pracownie/pracownia_ceramiczna'}>
						<Image
							src={ceramics}
							alt='ceramics photo'
							width={125}
							height={125}
							className='rounded-full mx-auto h-[125px] sm:h-[175px] sm:w-[175px] md:h-[200px] md:w-[200px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px]'
						/>
						<p className='text-center font-montserrat text-2xl tracking-wide font-semibold text-gray-700 mt-4'>
							Ceramiczna
						</p>
					</Link>
				</div>
				<div className='mb-10'>
					<Link href={'/pracownie/pracownia_kobiet'}>
						<Image
							src={tailoring}
							alt='woman photo'
							width={125}
							height={125}
							className='rounded-full mx-auto h-[125px] sm:h-[175px] sm:w-[175px] md:h-[200px] md:w-[200px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px]'
						/>
						<p className='text-center font-montserrat text-2xl tracking-wide font-semibold text-gray-700 mt-4'>
							Kobiet
						</p>
					</Link>
				</div>
				<div className='mb-10'>
					<Link href={'#'}>
						<Image
							src={children}
							alt='flowers photo'
							width={125}
							height={125}
							className='rounded-full mx-auto h-[125px] sm:h-[175px] sm:w-[175px] md:h-[200px] md:w-[200px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px]'
						/>
						<p className='text-center font-montserrat text-2xl tracking-wide font-semibold text-gray-700 mt-4'>
							Dzieci
						</p>
					</Link>
				</div>
				<div className='mb-10'>
					<Link href={'#'}>
						<Image
							src={tailoring}
							alt='flowers photo'
							width={125}
							height={125}
							className='rounded-full mx-auto h-[125px] sm:h-[175px] sm:w-[175px] md:h-[200px] md:w-[200px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px]'
						/>
						<p className='text-center font-montserrat text-2xl tracking-wide font-semibold text-gray-700 mt-4'>
							Miasta
						</p>
					</Link>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default WorkshopsPage
