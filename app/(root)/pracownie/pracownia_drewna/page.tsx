import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'

const WoodWorkshopPage = () => {
	return (
		<>
			<div className='px-8 bg-[var(--primary)] pt-20 min-h-screen relative'>
				<div className='absolute top-6 left-6'>
					<Navigation />
				</div>
				<PageTitle title='pracownia drewna' />
				<Footer />
			</div>
		</>
	)
}

export default WoodWorkshopPage
