import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'

export const metadata = {
	title: 'FMP | Pracownia Dzieci',
}

const ChildrenWorkshopPage = () => {
	return (
		<>
			<div className='absolute top-6 left-6'>
				<Navigation />
			</div>
			<PageTitle title='pracownia w mieście' />
			<div className='mt-10 lg:mt-20 max-w-[80vw] md:max-w-[60vw] mx-auto mb-20'>
				<h3 className='w-full text-justify font-montserrat tracking-wide leading-loose text-lg lg:text-xl mx-auto'>
					Przestrzeń stworzona z myślą o najmłodszych – pełna koloru, pomysłów i
					radości tworzenia. Twórczo-konstrukcyjne warsztaty, podczas których
					pracujemy z różnorodnymi materiałami: papierem, drewnem, tkaninami,
					gliną i wieloma innymi. Każde zajęcia to nowa przygoda, nowy temat i
					nowe wyzwanie! To czas, w którym dzieci rozwijają swoją wyobraźnię,
					ćwiczą sprawność manualną, uczą się współpracy i budują relacje z
					rówieśnikami – wszystko z dala od ekranów, w świecie, który można
					dotknąć, poczuć i współtworzyć. W naszej Pracowni dzieci są sprawcze,
					zaangażowane i wolne w twórczości. A my – towarzyszymy im w odkrywaniu
					własnych pomysłów i radości z działania.
				</h3>
			</div>
			<Footer />
		</>
	)
}

export default ChildrenWorkshopPage
