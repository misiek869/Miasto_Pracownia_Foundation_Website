import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'

const AboutUsPage = () => {
	return (
		<>
			<div className='px-8 bg-[var(--primary)] pt-20 min-h-screen '>
				<div className='absolute top-6 left-6'>
					<Navigation hidden='about' />
				</div>
				<PageTitle title='o fundacji' />
			</div>
		</>
	)
}

export default AboutUsPage
