import Image from 'next/image'
import Link from 'next/link'
import MainNav from './main-nav'
import smallLogo from '@/public/images/Miasto-Pracownia_Logo_small.png'
import UserButton from '@/components/UserButton'
import { auth } from '@/auth'

export default async function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const session = await auth()

	return (
		<>
			<div className='flex flex-col'>
				<div className='border-b container mx-auto'>
					<div className='flex items-center justify-between h-16 px-4'>
						<div className='flex flex-row gap-x-12'>
							<Link href='/' className='w-22'>
								<Image src={smallLogo} height={150} width={150} alt={'logo'} />
							</Link>
							<MainNav className='mx-6' />
						</div>

						<UserButton user={session?.user || undefined} />
					</div>
				</div>

				<div className='flex-1 space-y-4 p-8 pt-6 container mx-auto'>
					{children}
				</div>
			</div>
		</>
	)
}
