'use client'

import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel from '@/components/carousel/Carousel'

// export const metadata = {
// 	title: 'FMP | Pracownia Drewna',
// }

const images: string[] = [
	'/images/workshops_images/wood/01.webp',
	'/images/workshops_images/wood/02.webp',
	'/images/workshops_images/wood/03.webp',
	'/images/workshops_images/wood/04.webp',
	'/images/workshops_images/wood/05.webp',
]

const WoodWorkshopPage = () => {
	const OPTIONS: EmblaOptionsType = { loop: true }
	return (
		<div className=''>
			<div className='absolute top-6 left-6'>
				<Navigation />
			</div>
			<PageTitle title='pracownia drewna' />
			<div className='mt-10 lg:mt-20 max-w-[80vw] md:max-w-[60vw] mx-auto mb-20'>
				<h3 className='w-full text-justify font-montserrat tracking-wide leading-loose text-lg lg:text-xl mx-auto'>
					Warsztaty rodzinne, podczas których wspólnie tworzymy drewniane
					konstrukcje – od prostych projektów po prawdziwe dzieła wyobraźni! To
					doskonała okazja, by spędzić czas razem, ucząc się pracy z drewnem i
					rozwijając kreatywność w bezpiecznym, inspirującym środowisku. W
					czasie warsztatów piłujemy, skręcamy, kleimy, malujemy… Niezależnie od
					wieku i umiejętności – każdy znajdzie coś dla siebie. Wspólne
					majsterkowanie to nie tylko świetna zabawa, ale i sposób na budowanie
					więzi, naukę współpracy oraz rozwijanie zdolności manualnych u dzieci
					i dorosłych.
				</h3>
				<div className='max-w-[80vw] md:max-w-[60vw] mt-20 pb-20 mx-auto '>
					<Carousel
						slides={images}
						options={OPTIONS}
						borderColor={'border-[var(--primary)]'}
					/>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default WoodWorkshopPage
