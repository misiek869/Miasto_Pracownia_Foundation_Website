import dayjs from 'dayjs'
import Link from 'next/link'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
	const currentYear = dayjs().year()
	return (
		<div className='bg-gray-900 flex md:flex-row flex-col justify-center md:justify-between  py-6 px-8 md:py-4  min-w-screen absolute bottom-0 right-0'>
			<p className='text-slate-50 tracking-wider font-montserrat text-md md:text-lg font-normal mb-4 md:mb-0 text-center'>
				Copyright &copy;{currentYear}{' '}
				<Link className='cursor-default' href={'/'}>
					Miasto Pracownia
				</Link>
			</p>
			<div className='flex items-center gap-x-4 justify-center'>
				<Link href={'#'}>
					<FaFacebook className='text-slate-50 w-5 h-5 md:w-7 md:h-7 hover:text-slate-200 hover:animate-pulse' />
				</Link>
				<Link href={'#'}>
					<FaInstagram className='text-slate-50 w-5 h-5 md:w-7 md:h-7 hover:text-slate-200 hover:animate-pulse' />
				</Link>
			</div>
		</div>
	)
}

export default Footer
