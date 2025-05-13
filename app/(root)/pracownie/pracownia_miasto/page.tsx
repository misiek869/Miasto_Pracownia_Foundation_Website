'use client'

import PageTitle from '@/components/PageTitle'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel from '@/components/carousel/Carousel'
import Button from '@/components/Button'

// export const metadata = {
// 	title: 'FMP | Pracownia w Mieście',
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

const CityWorkshopPage = () => {
	const OPTIONS: EmblaOptionsType = { loop: true }
	return (
		<>
			<PageTitle title='pracownia w mieście' bgColor='bg-lime-600' />
			<div className='mt-10 lg:mt-20 max-w-[80vw] md:max-w-[60vw] mx-auto flex flex-col justify-center items-center'>
				<h3 className='w-full text-justify font-montserrat tracking-wide leading-loose text-lg lg:text-xl mx-auto '>
					Projekt „Pracownia w mieście” to cykl warsztatów twórczych, które
					łączą kreatywność, praktyczność i sąsiedzką energię. Podczas naszych
					spotkań tworzymy dekoracje i przedmioty do domu – jak kwietniki,
					wiosenne stroiki, półki na klucze czy inne drobiazgi, które sprawiają,
					że codzienna przestrzeń staje się bardziej &quot;nasza&quot;.
					„Pracownia w mieście” to również przestrzeń dialogu i współtworzenia.
					Regularnie pytamy uczestników, jakie tematy, techniki czy pomysły
					chcieliby wspólnie realizować – a potem działamy razem, by je
					urzeczywistnić.
				</h3>

				<h3 className='w-full text-justify font-montserrat tracking-wide leading-loose text-lg lg:text-xl mx-auto mt-4'>
					W ramach projektu „Pracownia w mieście” działa otwarta inicjatywa,
					podczas której można się z nami spotkać, porozmawiać przy kawie i
					podzielić swoim pomysłem na twórcze działania w mieście. Jeśli masz
					pasję, umiejętności i chcesz się nimi podzielić – jesteśmy tu, by
					pomóc Ci rozwinąć skrzydła. Dzięki takim spotkaniom powstała u nas
					Pracownia Krawiecka i Pracownia Ceramiki – kobiety, które zgłosiły się
					z pomysłem, dziś prowadzą własne warsztaty dla innych.
				</h3>

				<div className='max-w-[80vw] md:max-w-[60vw] mt-20 pb-20 mx-auto '>
					<Carousel
						slides={images}
						options={OPTIONS}
						borderColor={'border-[var(--primary)]'}
						imageHeight='h-[350px]'
					/>
				</div>
				<Button bgColor='bg-lime-600' hoverTextColor='hover:text-lime-600' />
			</div>
		</>
	)
}

export default CityWorkshopPage
