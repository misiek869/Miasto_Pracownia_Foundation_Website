'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/images/Miasto-Pracownia_Logo.png'
import Navigation from '@/components/Navigation'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

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
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

	return (
		<>
			<div className=' flex flex-col'>
				<div className='bg-rose-300 h-screen px-2 pt-10 flex flex-col items-center justify-baseline relative'>
					<div className='absolute top-6 left-6'>
						<Navigation disabled={true} />
					</div>
					{/* <h1 className='capitalize font-calistoga tracking-wide leading-snug text-6xl md:text-7xl lg:text-6xl text-center mb-10 text-rose-500'>
						fundacja miasto pracownia
					</h1> */}
					<Image width={600} height={600} src={logo} alt='logo' />
					{/* <h3 className='font-montserrat text-4xl capitalize mb-16 tracking-wide'>
						twórcze działania
					</h3> */}
					<Button
						asChild
						size={'lg'}
						variant={'ghost'}
						className='bg-black text-xl font-montserrat font-semibold uppercase tracking-wider text-rose-300'>
						<Link href={'/about-us'}>Poznaj Nas</Link>
					</Button>

					<div className='embla' ref={emblaRef}>
						<div className='embla__container'>
							{images.map((image, index) => {
								return (
									<div className='embla__slide' key={index}>
										<Image
											src={image}
											alt={`Slide ${index + 1}`}
											width={600}
											height={400}
										/>
									</div>
								)
							})}
						</div>
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
