'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/images/Miasto-Pracownia_Logo.png'
import Navigation from '@/components/Navigation'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel from '@/components/carousel/Carousel'

const images: string[] = [
	'/images/carousel_images/1.jpg',
	'/images/carousel_images/2.jpg',
	'/images/carousel_images/3.jpg',
	'/images/carousel_images/4.jpg',
	'/images/carousel_images/5.jpg',
	'/images/carousel_images/6.jpg',
	'/images/carousel_images/7.jpg',
]

const HomePage = () => {
	const OPTIONS: EmblaOptionsType = { loop: true }

	return (
		<>
			<div className='flex flex-col min-h-screen'>
				<div className='bg-rose-400 h-screen py-4 px-2 lg:pt-10 flex flex-col items-center justify-center lg:justify-baseline relative'>
					<div className='absolute top-6 left-6'>
						<Navigation disabled={true} />
					</div>

					<Image
						width={700}
						height={700}
						src={logo}
						alt='logo'
						className='pb-16 xl:pb-2'
					/>

					<Button
						asChild
						size={'lg'}
						variant={'ghost'}
						className='bg-black text-xl font-montserrat font-semibold uppercase tracking-wider text-rose-400 rounded-full duration-300 shadow-xl'>
						<Link href={'/kalendarz'}>Kalendarz Wydarzeń</Link>
					</Button>
					<div className='w-[90vw] mt-20'>
						<Carousel
							slides={images}
							options={OPTIONS}
							borderColor={'border-rose-300'}
							hideBtns='hidden'
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomePage
