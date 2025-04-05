import Navigation from '@/components/Navigation'
import PageTitle from '@/components/PageTitle'
import Image from 'next/image'
import zdjecie_kasia from '@/public/images/woman_1.jpg'
import zdjecie_dorota from '@/public/images/woman_2.jpg'
import about_photo from '@/public/images/about_photo.jpg'

const AboutUsPage = () => {
	return (
		<>
			<div className='px-8 bg-[var(--primary)] py-20 min-h-screen'>
				<div className='absolute top-6 left-6'>
					<Navigation hidden='about' />
				</div>
				<PageTitle title='o fundacji' />

				<div className='mt-20 md:max-w-[60vw] mx-auto mb-20'>
					<Image
						src={about_photo}
						alt='about image'
						className='rounded-full mx-auto'
					/>
					<p className='max-w-[70%] mt-10 text-justify font-montserrat tracking-wide leading-loose text-lg lg:text-xl mx-auto'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
						dolores harum quas in nulla voluptate temporibus illo asperiores
						corrupti doloribus deserunt eius, esse nobis officiis rem recusandae
						ullam, perspiciatis doloremque. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Dolorem, a minus repellendus maxime
						cupiditate nostrum obcaecati alias odit et optio dignissimos autem
						temporibus ab sunt exercitationem rerum nihil? Ea, aliquam?
					</p>
				</div>

				<PageTitle title='o nas' />

				<div className='grid grid-cols-1 lg:grid-cols-2 mt-10 md:max-w-[60vw] mx-auto'>
					<div className='flex flex-col justify-center mx-auto'>
						<Image
							src={zdjecie_dorota}
							alt='zdjęcie Doroty'
							width={442}
							height={442}
							className='rounded-full max-w-[75%] mx-auto'
						/>
						<h2 className='font-calistoga tracking-wide text-rose-500 mx-auto pt-10 text-3xl md:text-4xl'>
							Dorota
						</h2>
						<p className='pt-4 px-8 text-justify font-montserrat tracking-wide leading-loose text-sm lg:text-lg'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Perspiciatis eveniet quo deserunt soluta esse voluptatum in
							corrupti saepe adipisci nihil veniam earum numquam eum dicta
							fugiat animi ut, iure laboriosam.
						</p>
					</div>
					<div className='flex flex-col justify-center mx-auto pt-10 lg:pt-0'>
						<Image
							src={zdjecie_kasia}
							alt='zdjęcie Kasi'
							width={442}
							height={442}
							className='rounded-full max-w-[75%] mx-auto'
						/>
						<h2 className='font-calistoga tracking-wide text-rose-500 mx-auto pt-10 text-3xl md:text-4xl'>
							Kasia
						</h2>
						<p className='pt-4 px-8 text-justify font-montserrat tracking-wide leading-loose text-sm lg:text-lg'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Perspiciatis eveniet quo deserunt soluta esse voluptatum in
							corrupti saepe adipisci nihil veniam earum numquam eum dicta
							fugiat animi ut, iure laboriosam.
						</p>
					</div>
					<div className=''></div>
				</div>
			</div>
		</>
	)
}

export default AboutUsPage
