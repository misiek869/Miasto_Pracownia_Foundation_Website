import dayjs from 'dayjs'
import Link from 'next/link'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
	const currentYear = dayjs().year()
	console.log(currentYear)

	return (
		<div className='bg-gray-900 flex-row md:flex justify-center md:justify-between  py-6 px-8 md:py-4 absolute bottom-0 right-0 min-w-screen'>
			<p className='text-slate-50 tracking-wider font-montserrat text-lg font-normal mb-4 md:mb-0 text-center'>
				Copyright &copy;{currentYear} Miasto Pracownia
			</p>
			<div className='flex items-center gap-x-4 justify-center'>
				<Link href={'#'}>
					<FaFacebook className='text-slate-50 w-7 h-7 hover:text-slate-200 hover:animate-pulse' />
				</Link>
				<Link href={'#'}>
					<FaInstagram className='text-slate-50 w-7 h-7 hover:text-slate-200 hover:animate-pulse' />
				</Link>
			</div>
		</div>
	)
}

export default Footer
