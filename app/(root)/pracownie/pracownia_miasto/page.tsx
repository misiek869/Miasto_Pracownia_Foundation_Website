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
			</div>
			<Footer />
		</>
	)
}

export default CityWorkshopPage
