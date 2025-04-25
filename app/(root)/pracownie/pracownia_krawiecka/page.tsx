'use client'

import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel from '@/components/carousel/Carousel'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// export const metadata = {
// 	title: 'FMP | Pracownia Drewna',
// }

const images: string[] = [
	'/images/workshops_images/wood/01.webp',
	'/images/workshops_images/wood/02.webp',
	'/images/workshops_images/wood/03.webp',
	'/images/workshops_images/wood/04.webp',
	'/images/workshops_images/wood/05.webp',
	'/images/workshops_images/wood/06.webp',
	'/images/workshops_images/wood/07.webp',
	'/images/workshops_images/wood/08.webp',
	'/images/workshops_images/wood/09.webp',
	'/images/workshops_images/wood/10.webp',
	'/images/workshops_images/wood/11.webp',
]

const TailoringWorkshopPage = () => {
	const OPTIONS: EmblaOptionsType = { loop: true }
	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='absolute top-6 left-6'>
				<Navigation />
			</div>
			<PageTitle title='pracownia krawiecka' />
			<div className='mt-30 lg:mt-20 max-w-[80vw] md:max-w-[60vw] mx-auto mb-20 flex flex-col justify-center'>
				<h3 className='w-full text-justify font-montserrat tracking-wide leading-loose text-lg lg:text-xl mx-auto'>
					Kreatywne warsztaty krawieckie dla dzieci, dorosłych i całych rodzin!
					Niezależnie od wieku i doświadczenia – każdy może tu odkryć radość
					szycia i tworzenia wyjątkowych projektów własnymi rękami. Pod czujnym
					okiem zawodowej krawcowej uczymy się obsługi maszyny do szycia,
					poznajemy podstawy krawiectwa, a także wykonujemy projekty dostosowane
					do Waszych umiejętności – od prostych akcesoriów po bardziej
					zaawansowane formy. To warsztaty, które uczą cierpliwości, rozwijają
					wyobraźnię i pozwalają stworzyć coś naprawdę swojego – czy to
					poduszka, torba, maskotka, czy ubranie!
				</h3>

				<div className='max-w-[80vw] md:max-w-[60vw] mt-20 pb-20 mx-auto '>
					<Carousel
						slides={images}
						options={OPTIONS}
						borderColor={'border-[var(--primary)]'}
						imageHeight='h-[350px]'
					/>
				</div>
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

export default TailoringWorkshopPage
