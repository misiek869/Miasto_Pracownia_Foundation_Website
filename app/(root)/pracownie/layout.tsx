'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const pathname = usePathname()

	return (
		<div className='px-8 bg-[var(--primary)] pt-20 pb-20 min-h-screen relative flex flex-col'>
			<div className='flex flex-col justify-center items-center'>
				<div className='absolute top-6 left-6'>
					<Navigation hidden='workshops' />
				</div>
				{children}
			</div>
			<Footer />
		</div>
	)
}
