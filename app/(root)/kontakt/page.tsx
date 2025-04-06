'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps'
import Footer from '@/components/Footer'

const ContactPage = () => {
	const position = { lat: 50.0387346443218, lng: 19.226098300000004 }

	return (
		<>
			<div className='absolute top-6 left-6'>
				<Navigation hidden='contact' />
			</div>
			<div className='px-8 bg-[var(--primary)] py-20 min-h-screen w-screen'>
				<PageTitle title='kontakt' />
				<div className='grid grid-cols-2 pt-20'>
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
					<div className=''></div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default ContactPage
