'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

import React from 'react'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='px-8 bg-[var(--primary)] pt-20 min-h-screen relative flex flex-col'>
			<div className='flex flex-col justify-center pb-40  items-center'>
				<div className='absolute top-6 left-6'>
					<Navigation hidden='workshops' />
				</div>
				{children}
			</div>
			<Footer />
		</div>
	)
}
