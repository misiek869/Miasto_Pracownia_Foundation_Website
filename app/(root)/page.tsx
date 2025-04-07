'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import flamingo from '@/public/images/flamingo.jpg'
import Navigation from '@/components/Navigation'
import { GiFlamingo } from 'react-icons/gi'

const HomePage = () => {
	return (
		<>
			<div className='h-screen flex flex-col lg:flex-row'>
				<div className='bg-[var(--primary)] h-screen lg:h-screen px-2 lg:px-0 lg:w-1/2 flex flex-col items-center justify-center relative'>
					<div className='absolute top-6 left-6'>
						<Navigation disabled={true} />
					</div>
					<h1 className='capitalize font-calistoga tracking-wide leading-snug text-6xl md:text-7xl lg:text-6xl text-center mb-10 text-rose-500'>
						fundacja miasto pracownia
					</h1>
					<h3 className='font-montserrat text-4xl capitalize mb-16 tracking-wide'>
						twórcze działania
					</h3>
					<Button
						asChild
						size={'lg'}
						variant={'ghost'}
						className='bg-rose-500 text-xl uppercase tracking-wider text-[var(--primary)]'>
						<Link href={'/about-us'}>Poznaj Nas</Link>
					</Button>
					<div className='absolute bottom-0 left-10 lg:hidden'>
						<GiFlamingo className=' text-rose-500 h-80 w-80' />
					</div>
				</div>
				<div className='bg-[var(--primary)] lg:bg-rose-500 lg:h-screen hidden lg:block lg:w-1/2 relative'>
					<Image
						height={500}
						width={500}
						src={flamingo}
						alt='flamingo_image'
						className='rounded-tl-[50%] rounded-tr-[50%] absolute bottom-0 left-1/2 transform -translate-x-1/2'
					/>
				</div>
			</div>
		</>
	)
}

export default HomePage
