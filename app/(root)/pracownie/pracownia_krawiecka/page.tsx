'use client'

import PageTitle from '@/components/PageTitle'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel from '@/components/carousel/Carousel'
import Button from '@/components/Button'

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
		<>
			<PageTitle title='pracownia krawiecka' bgColor='bg-sky-600' />
			<div className='mt-10 lg:mt-20 max-w-[80vw] md:max-w-[60vw] mx-auto flex flex-col justify-center items-center'>
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
				<Button bgColor='bg-sky-600' hoverTextColor='hover:text-sky-600' />
			</div>
		</>
	)
}

export default TailoringWorkshopPage
