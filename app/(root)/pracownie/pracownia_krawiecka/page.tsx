import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'

export const metadata = {
	title: 'FMP | Pracownia Krawiecka',
}

const TailoringWorkshopPage = () => {
	return (
		<>
			<div className='absolute top-6 left-6'>
				<Navigation />
			</div>
			<PageTitle title='pracownia drewna' />
			<div className='mt-10 lg:mt-20 max-w-[80vw] md:max-w-[60vw] mx-auto mb-20'>
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
			</div>
			<Footer />
		</>
	)
}

export default TailoringWorkshopPage
