import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'

export const metadata = {
	title: 'FMP | Pracownia Kobiet',
}

const WomanWorkshopPage = () => {
	return (
		<>
			<div className='absolute top-6 left-6'>
				<Navigation />
			</div>
			<PageTitle title='pracownia kobiet' />
			<div className='mt-10 lg:mt-20 max-w-[80vw] md:max-w-[60vw] mx-auto mb-20'>
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
			</div>
			<Footer />
		</>
	)
}

export default WomanWorkshopPage
