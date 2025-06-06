'use client'

// import { Button } from '@/components/ui/button'
import Image from 'next/image'
// import Link from 'next/link'
import logo from '@/public/images/Miasto-Pracownia_Logo.png'
import Navigation from '@/components/Navigation'
// import { EmblaOptionsType } from 'embla-carousel'
// import Carousel from '@/components/carousel/Carousel'
import Button from '@/components/Button'
import { motion } from 'framer-motion'
// import bgImg from '@/public/images/bg-dots.webp'

// const images: string[] = [
// 	'/images/carousel_images/1.jpg',
// 	'/images/carousel_images/2.jpg',
// 	'/images/carousel_images/3.jpg',
// 	'/images/carousel_images/4.jpg',
// 	'/images/carousel_images/5.jpg',
// 	'/images/carousel_images/6.jpg',
// 	'/images/carousel_images/7.jpg',
// ]

const HomePage = () => {
	// const OPTIONS: EmblaOptionsType = { loop: true }

	return (
		<>
			<motion.div
				className='flex flex-col min-h-screen'
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 0.3, duration: 0.4, ease: 'easeInOut' },
				}}>
				{/* <Image
					src={bgImg}
					alt='Tło strony'
					fill // Wypełnia cały dostępny obszar rodzica
					className='object-cover -z-10' // -z-10 umieszcza za zawartością
					priority // Optymalizacja ładowania
				/> */}
				<div className='bg-[var(--primary)] h-screen py-4 px-2 lg:pt-10 flex flex-col items-center justify-center lg:justify-baseline relative'>
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

					{/* <Button
						asChild
						size={'lg'}
						variant={'ghost'}
						className='bg-black text-md md:text-xl lg:text-2xl font-montserrat font-semibold uppercase tracking-wider text-rose-400 rounded-full duration-300 shadow-xl'>
						<Link href={'/kalendarz'}>Kalendarz Wydarzeń</Link>
					</Button> */}

					<Button />

					{/* <div className='w-[90vw] mt-20'>
						<Carousel
							slides={images}
							options={OPTIONS}
							borderColor={'border-rose-300'}
							hideBtns='hidden'
						/>
					</div> */}
				</div>
			</motion.div>
		</>
	)
}

export default HomePage
