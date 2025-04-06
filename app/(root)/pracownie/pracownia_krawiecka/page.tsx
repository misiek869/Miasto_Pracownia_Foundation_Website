import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'

const TailoringWorkshopPage = () => {
	return (
		<>
			<div className='px-8 bg-[var(--primary)] pt-20 min-h-screen relative'>
				<div className='absolute top-6 left-6'>
					<Navigation hidden='calendar' />
				</div>
				<PageTitle title='pracownia krawiecka' />
				<Footer />
			</div>
		</>
	)
}

export default TailoringWorkshopPage
