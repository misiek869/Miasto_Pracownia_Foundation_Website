'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'

interface RootLayoutProps {
	children: React.ReactNode
	isVisible?: boolean
}

const RootLayout = ({ children }: RootLayoutProps) => {
	const pathname = usePathname()

	return (
		<div className='px-8 bg-[var(--primary)] pt-20 pb-20 min-h-screen relative flex flex-col'>
			<div className='flex flex-col justify-center items-center'>
				<div className='absolute top-6 left-6'>
					<Navigation />
				</div>
				{children}
				<Button
					asChild
					size={'lg'}
					variant={'ghost'}
					className={
						pathname === '/pracownie'
							? 'hidden'
							: `bg-gray-900 text-lg sm:text-xl font-montserrat font-semibold uppercase tracking-wider text-slate-50 rounded-full duration-300 mb-20 mt-4 `
					}>
					<Link href={'/kalendarz'}>Kalendarz Wydarzeń</Link>
				</Button>
			</div>
			<Footer />
		</div>
	)
}

export default RootLayout
