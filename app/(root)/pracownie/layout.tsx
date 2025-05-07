import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

import React from 'react'

interface RootLayoutProps {
	children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<div className='px-8 bg-[var(--primary)] pt-20 min-h-screen relative flex flex-col md:justify-center pb-20 mx-auto'>
			<div className='flex flex-col items-center justify-center'>
				<div className='absolute top-6 left-6'>
					<Navigation />
				</div>
				{children}
				<Button
					asChild
					size={'lg'}
					variant={'ghost'}
					className='bg-gray-900 text-xl font-montserrat font-semibold uppercase tracking-wider text-slate-50 rounded-full duration-300 mt-10 mx-auto'>
					<Link href={'/kalendarz'}>Kalendarz Wydarzeń</Link>
				</Button>
			</div>
			<Footer />
		</div>
	)
}

export default RootLayout
