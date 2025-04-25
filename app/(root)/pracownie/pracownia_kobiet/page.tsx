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
	'/images/workshops_images/woman/01.webp',
	'/images/workshops_images/woman/02.webp',
	'/images/workshops_images/woman/03.webp',
	'/images/workshops_images/woman/04.webp',
	'/images/workshops_images/woman/05.webp',
	'/images/workshops_images/woman/06.webp',
	'/images/workshops_images/woman/07.webp',
]

const WomanWorkshopPage = () => {
	const OPTIONS: EmblaOptionsType = { loop: true }
	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='absolute top-6 left-6'>
				<Navigation />
			</div>
			<PageTitle title='pracownia kobiet' />
			<div className='mt-30 lg:mt-20 max-w-[80vw] md:max-w-[60vw] mx-auto mb-20 flex flex-col justify-center'>
				<h3 className='w-full text-justify font-montserrat tracking-wide leading-loose text-lg lg:text-xl mx-auto'>
					Przestrzeń stworzona z myślą o kobietach – pełna ciepła, zrozumienia i
					wzajemnego wsparcia. Nasze warsztaty to coś więcej niż tylko zajęcia –
					to czas dla Ciebie. Czas na rozwój, twórczość i autentyczne spotkanie
					z innymi kobietami. W ramach Pracowni Kobiet zapraszamy na różnorodne
					warsztaty: florystyczne, malarskie, rękodzielnicze, a także spotkania
					oparte na psychologii i rozwoju osobistym. To przestrzeń, w której
					możesz tworzyć, mówić, słuchać i być wysłuchaną – bez oceniania, w
					zaufaniu i akceptacji. Nie musisz nic umieć ani niczego udowadniać –
					wystarczy, że jesteś. My zadbamy o atmosferę, inspirację i czułą
					obecność.
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

export default WomanWorkshopPage
