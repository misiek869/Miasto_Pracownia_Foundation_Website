import Image from 'next/image'
import Link from 'next/link'
// import Menu from '@/components/shared/header/menu'
// import MainNav from './main-nav'
// import AdminSearch from '@/components/admin/admin-search'
import smallLogo from '@/public/images/Miasto-Pracownia_Logo_small.png'
import UserButton from '@/components/UserButton'

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<div className='flex flex-col'>
				<div className='border-b container mx-auto'>
					<div className='flex items-center justify-between h-16 px-4'>
						<Link href='/' className='w-22'>
							<Image src={smallLogo} height={150} width={150} alt={'logo'} />
						</Link>
						{/* <MainNav className='mx-6' />
						<div className='ml-auto items-center flex space-x-4'>
							<AdminSearch />
							<Menu />
						</div> */}
						<UserButton />
					</div>
				</div>

				<div className='flex-1 space-y-4 p-8 pt-6 container mx-auto'>
					{children}
				</div>
			</div>
		</>
	)
}
