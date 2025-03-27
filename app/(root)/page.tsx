import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import flamingo from '@/public/images/flamingo.jpg'

const HomePage = () => {
	return (
		<>
			<div className='h-screen flex flex-col lg:flex-row'>
				<div className='bg-[var(--primary)] h-1/2 lg:h-screen lg:w-1/2 flex flex-col items-center justify-center'>
					<h1 className='capitalize font-calistoga tracking-wide leading-snug text-6xl text-center mb-10 text-rose-500'>
						fundacja miasto pracownia
					</h1>
					<h3 className='font-montserrat text-4xl capitalize mb-16 tracking-wide'>
						twórcze działania
					</h3>
					<Button
						asChild
						size={'lg'}
						variant={'ghost'}
						className='bg-rose-500 text-xl uppercase tracking-wider text-[var(--primary)]'>
						<Link href={'/'}>Poznaj Nas</Link>
					</Button>
				</div>
				<div className='bg-rose-500 h-1/2 lg:h-screen lg:w-1/2 flex items-end justify-center'>
					<Image
						height={500}
						width={500}
						src={flamingo}
						alt='flamingo_image'
						className='rounded-tl-[45%] rounded-tr-[45%]'
					/>
				</div>
			</div>
		</>
	)
}

export default HomePage
