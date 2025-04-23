'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps'
import Footer from '@/components/Footer'
import Image from 'next/image'
import logoMedium from '@/public/images/Miasto-Pracownia_Logo_medium.png'
import { MdEmail } from 'react-icons/md'

const ContactPage = () => {
	const position = { lat: 50.0387346443218, lng: 19.226098300000004 }

	return (
		<>
			<div className='min-h-screen relative'>
				<div className='absolute top-6 left-6'>
					<Navigation hidden='contact' home={true} />
				</div>
				<div className='px-8 bg-[var(--primary)] py-20 min-h-screen w-screen'>
					<PageTitle title='kontakt' />
					<div className='grid grid-cols-1 xl:grid-cols-2 pt-20 items-start'>
						<APIProvider
							apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''}>
							<div className='h-[50vh] w-[100%]'>
								<Map
									defaultCenter={position}
									defaultZoom={10}
									mapId={process.env.NEXT_PUBLIC_MAP_ID}>
									<AdvancedMarker position={position} />
								</Map>
							</div>
						</APIProvider>
						<div className='py-20 xl:py-0'>
							<Image
								src={logoMedium}
								alt='logo'
								width={400}
								className='mx-auto'
							/>
							<div className='w-full flex justify-center flex-col items-center gap-4 mt-10'>
								<h2 className='capitalize font-montserrat tracking-wider text-2xl font-bold'>
									fundacja miasto pracownia
								</h2>
								<h3 className='font-montserrat tracking-wide text-xl font-medium'>
									ul. Gen. Jarosława Dąbrowskiego 15
								</h3>
								<h3 className='font-montserrat tracking-wide text-xl font-medium'>
									32-600 Oświęcim
								</h3>
								<div className='flex items-center gap-2'>
									<MdEmail className='w-6 h-6 text-rose-400' />
									<h3 className='font-montserrat tracking-wide text-xl font-medium'>
										fundacjamiastopracownia@gmail.com
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default ContactPage
