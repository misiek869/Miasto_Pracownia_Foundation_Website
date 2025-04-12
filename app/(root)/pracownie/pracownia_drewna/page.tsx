import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'

const WoodWorkshopPage = () => {
	return (
		<>
			<div className='absolute top-6 left-6'>
				<Navigation />
			</div>
			<PageTitle title='pracownia drewna' />
			<Footer />
		</>
	)
}

export default WoodWorkshopPage
