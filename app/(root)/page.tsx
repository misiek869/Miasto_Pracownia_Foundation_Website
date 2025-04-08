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
			<div className=' flex flex-col'>
				<div className='bg-rose-300 h-screen px-2 pt-20 flex flex-col items-center justify-baseline relative'>
					<div className='absolute top-6 left-6'>
						<Navigation disabled={true} />
					</div>

					<Image width={600} height={600} src={logo} alt='logo' />

					<Button
						asChild
						size={'lg'}
						variant={'ghost'}
						className='bg-black text-xl font-montserrat font-semibold uppercase tracking-wider text-rose-300 rounded-full'>
						<Link href={'/kalendarz'}>Kalendarz Wydarzeń</Link>
					</Button>
					<div className='w-[90vw] mt-20'>
						<Carousel slides={images} options={OPTIONS} />
					</div>
				</div>
				{/* <div className='bg-[var(--primary)] lg:bg-rose-400 lg:h-screen hidden lg:block lg:w-1/2 relative'>
					<Image
						height={500}
						width={500}
						src={flamingo}
						alt='flamingo_image'
						className='rounded-tl-[50%] rounded-tr-[50%] absolute bottom-0 left-1/2 transform -translate-x-1/2'
					/>
				</div> */}
			</div>
		</>
	)
}

export default HomePage
