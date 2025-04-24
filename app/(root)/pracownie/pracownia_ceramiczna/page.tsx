import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'

export const metadata = {
	title: 'FMP | Pracownia Ceramiczna',
}

const CeramicsWorkshopPage = () => {
	return (
		<>
			<div className='absolute top-6 left-6'>
				<Navigation />
			</div>
			<PageTitle title='pracownia ceramiczna' />
			<div className='mt-10 lg:mt-20 max-w-[80vw] md:max-w-[60vw] mx-auto mb-20'>
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
			</div>
			<Footer />
		</>
	)
}

export default CeramicsWorkshopPage
