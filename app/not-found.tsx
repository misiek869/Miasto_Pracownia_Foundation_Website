'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import flamingo from '@/public/images/flamingo.jpg'

const NotFoundPage = () => {
	return (
		<div className='flex flex-col min-h-screen justify-center items-center'>
			<Image
				src={flamingo}
				width={120}
				height={120}
				alt='Logo'
				priority={true}
				className='rounded-full'
			/>
			<div className='text-center mt-12'>
				<h1 className='text-3xl font-bold mb-4 font-calistoga tracking-wider'>
					Not Found
				</h1>
				<p className='text-destructive font-montserrat'>
					We can not find requested page{' '}
				</p>
				<Button
					variant={'outline'}
					className='mt-4 ml-2 font-montserrat'
					onClick={() => {
						window.location.href = '/'
					}}>
					Back Home
				</Button>
			</div>
		</div>
	)
}

export default NotFoundPage
