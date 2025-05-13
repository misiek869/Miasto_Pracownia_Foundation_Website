'use client'

import PageTitle from '@/components/PageTitle'
import { EmblaOptionsType } from 'embla-carousel'
import Carousel from '@/components/carousel/Carousel'
import Button from '@/components/Button'

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
		<>
			<PageTitle title='pracownia kobiet' bgColor='bg-pink-500' />
			<div className='mt-10 lg:mt-20 max-w-[80vw] md:max-w-[60vw] mx-auto flex flex-col justify-center items-center'>
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
				<Button bgColor='bg-pink-500' hoverTextColor='hover:text-pink-500' />
			</div>
		</>
	)
}

export default WomanWorkshopPage
