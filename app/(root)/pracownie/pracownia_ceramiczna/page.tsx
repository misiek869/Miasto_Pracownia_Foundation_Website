'use client'

import PageTitle from '@/components/PageTitle'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel from '@/components/carousel/Carousel'
import Button from '@/components/Button'

// export const metadata = {
// 	title: 'FMP | Pracownia Ceramiczna',
// }

const images: string[] = [
	'/images/workshops_images/ceramics/01.webp',
	'/images/workshops_images/ceramics/02.webp',
	'/images/workshops_images/ceramics/03.webp',
	'/images/workshops_images/ceramics/04.webp',
]

const CeramicsWorkshopPage = () => {
	const OPTIONS: EmblaOptionsType = { loop: true }
	return (
		<>
			<PageTitle title='pracownia ceramiczna' bgColor='bg-yellow-400' />
			<div className='mt-10 lg:mt-20 max-w-[80vw] md:max-w-[60vw] mx-auto flex flex-col justify-center items-center'>
				<h3 className='w-full text-justify font-montserrat tracking-wide leading-loose text-lg lg:text-xl mx-auto'>
					Warsztaty ceramiczne, podczas których odkrywamy magię pracy z gliną –
					od pierwszego dotyku, przez lepienie, aż po szkliwienie i wypalanie w
					piecu. Pod opieką doświadczonej instruktorki uczymy się podstaw
					ceramiki oraz poznajemy różne techniki formowania i zdobienia. Każdy
					uczestnik – niezależnie od wieku czy umiejętności – może stworzyć coś
					pięknego i unikalnego: miseczkę, figurkę, ozdobę, a nawet elementy
					dekoracyjne do domu. To nie tylko kreatywne zajęcia, ale też chwila
					wyciszenia, skupienia i satysfakcji z pracy własnych rąk. Ceramika
					uczy cierpliwości i zachwytu nad procesem tworzenia.
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
					bgColor='bg-yellow-400'
					hoverTextColor='hover:text-yellow-400'
				/>
			</div>
		</>
	)
}

export default CeramicsWorkshopPage
