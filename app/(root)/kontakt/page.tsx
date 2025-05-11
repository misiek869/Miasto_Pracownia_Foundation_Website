'use client'

import React, { useState } from 'react'
import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'
import {
	AdvancedMarker,
	APIProvider,
	InfoWindow,
	Map,
} from '@vis.gl/react-google-maps'
import Footer from '@/components/Footer'
import Image from 'next/image'
import logoMedium from '@/public/images/Miasto-Pracownia_Logo_medium.png'
import { MdEmail } from 'react-icons/md'
import { GiFlamingo } from 'react-icons/gi'

const ContactPage = () => {
	const position = { lat: 50.0387346443218, lng: 19.226098300000004 }
	const [open, setOpen] = useState<boolean>(false)

	return (
		<>
			<div className='min-h-screen relative'>
				<div className='absolute top-6 left-6'>
					<Navigation hidden='contact' />
				</div>
				<div className='px-8 bg-[var(--primary)] py-20 min-h-screen w-screen '>
					<PageTitle title='kontakt' />
					<div className='grid grid-cols-1 xl:grid-cols-3 pt-20 items-start xl:w-[80vw] mx-auto'>
						<APIProvider
							apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''}>
							<div className='h-[50vh] w-[100%] col-span-2'>
								<Map
									defaultCenter={position}
									defaultZoom={17}
									mapId={process.env.NEXT_PUBLIC_MAP_ID}>
									<AdvancedMarker
										position={position}
										onClick={() => setOpen(true)}>
										<GiFlamingo
											size={70}
											color='#ff4081'
											className='animate-bounce '
										/>
									</AdvancedMarker>
									{open && (
										<InfoWindow
											position={position}
											onCloseClick={() => setOpen(false)}>
											<p className='text-lg'>
												ul. Gen. Jarosława Dąbrowskiego 15, 2 piętro
											</p>
										</InfoWindow>
									)}
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
							<div className='w-full flex justify-center flex-col items-center gap-4 mt-6 text-gray-900 text-center'>
								<h2 className='capitalize font-montserrat tracking-wider text-lg md:text-xl lg:text-2xl font-bold'>
									fundacja miasto pracownia
								</h2>
								<h3 className='font-montserrat tracking-wide text-md md:text-xl  font-medium'>
									Gen. Jarosława Dąbrowskiego 15, 2 piętro
								</h3>
								<h3 className='font-montserrat tracking-wide text-md md:text-xl  font-medium'>
									32-600 Oświęcim
								</h3>
								<div className='flex items-center gap-2 md:flex-row flex-col'>
									<MdEmail
										color='#ff4081'
										className='lg:w-10 lg:h-10 w-8 h-8'
									/>
									<h3 className='font-montserrat tracking-wide text-md md:text-xl  font-medium'>
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
