import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'

const CityWorkshopPage = () => {
	return (
		<>
			<div className='absolute top-6 left-6'>
				<Navigation />
			</div>
			<PageTitle title='pracownia w mieście' />
			<div className='mt-10 lg:mt-20 max-w-[80vw] md:max-w-[60vw] mx-auto mb-20'>
				<h3 className='w-full text-justify font-montserrat tracking-wide leading-loose text-lg lg:text-xl mx-auto'>
					Projekt „Pracownia w mieście” to cykl warsztatów twórczych, które
					łączą kreatywność, praktyczność i sąsiedzką energię. Podczas naszych
					spotkań tworzymy dekoracje i przedmioty do domu – jak kwietniki,
					wiosenne stroiki, półki na klucze czy inne drobiazgi, które sprawiają,
					że codzienna przestrzeń staje się bardziej "nasza". „Pracownia w
					mieście” to również przestrzeń dialogu i współtworzenia. Regularnie
					pytamy uczestników, jakie tematy, techniki czy pomysły chcieliby
					wspólnie realizować – a potem działamy razem, by je urzeczywistnić.
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
			</div>
			<Footer />
		</>
	)
}

export default CityWorkshopPage
