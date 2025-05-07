'use client'

import PageTitle from '@/components/PageTitle'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel from '@/components/carousel/Carousel'

// export const metadata = {
// 	title: 'FMP | Pracownia Dzieci',
// }

const images: string[] = [
	'/images/workshops_images/children/01.webp',
	'/images/workshops_images/children/02.webp',
	'/images/workshops_images/children/03.webp',
	'/images/workshops_images/children/04.webp',
	'/images/workshops_images/children/05.webp',
	'/images/workshops_images/children/06.webp',
	'/images/workshops_images/children/07.webp',
	'/images/workshops_images/children/08.webp',
	'/images/workshops_images/children/09.webp',
	'/images/workshops_images/children/10.webp',
	'/images/workshops_images/children/11.webp',
	'/images/workshops_images/children/12.webp',
	'/images/workshops_images/children/13.webp',
	'/images/workshops_images/children/14.webp',
	'/images/workshops_images/children/15.webp',
]

const ChildrenWorkshopPage = () => {
	const OPTIONS: EmblaOptionsType = { loop: true }

	return (
		<>
			<PageTitle title='pracownia dzieci' />
			<div className='mt-10 lg:mt-20 max-w-[80vw] md:max-w-[60vw] mx-auto flex flex-col justify-center'>
				<h3 className='w-full text-justify font-montserrat tracking-wide leading-loose text-lg lg:text-xl mx-auto'>
					Przestrzeń stworzona z myślą o najmłodszych – pełna koloru, pomysłów i
					radości tworzenia. Twórczo-konstrukcyjne warsztaty, podczas których
					pracujemy z różnorodnymi materiałami: papierem, drewnem, tkaninami,
					gliną i wieloma innymi. Każde zajęcia to nowa przygoda, nowy temat i
					nowe wyzwanie! To czas, w którym dzieci rozwijają swoją wyobraźnię,
					ćwiczą sprawność manualną, uczą się współpracy i budują relacje z
					rówieśnikami – wszystko z dala od ekranów, w świecie, który można
					dotknąć, poczuć i współtworzyć. W naszej Pracowni dzieci są sprawcze,
					zaangażowane i wolne w twórczości. A my – towarzyszymy im w odkrywaniu
					własnych pomysłów i radości z działania.
				</h3>

				<div className='max-w-[80vw] md:max-w-[60vw] mt-20 pb-20 mx-auto '>
					<Carousel
						slides={images}
						options={OPTIONS}
						borderColor={'border-[var(--primary)]'}
						imageHeight='h-[350px]'
					/>
				</div>
			</div>
		</>
	)
}

export default ChildrenWorkshopPage
