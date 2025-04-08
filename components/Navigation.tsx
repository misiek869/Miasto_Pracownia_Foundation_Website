import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import logo_small from '@/public/images/Miasto-Pracownia_Logo_small.png'
import Image from 'next/image'

type NavigationProps = {
	disabled?: boolean
	hidden?: string
}

const Navigation = ({ disabled, hidden }: NavigationProps) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='outline' size='icon' className='rounded-full'>
					<Menu className='h-6 w-6' />
				</Button>
			</SheetTrigger>
			<SheetContent side='left' className='h-[300px] w-[300px] rounded-full'>
				{disabled ? (
					<div className='mt-4 flex justify-center'>
						<Image
							src={logo_small}
							alt='small logo image'
							width={100}
							height={100}
						/>
					</div>
				) : (
					<Link href='/' className='mt-4 flex justify-center' prefetch={false}>
						<Image
							src={logo_small}
							alt='small logo image'
							width={100}
							height={100}
						/>
					</Link>
				)}

				<div className='grid gap-0.5 justify-center '>
					{/* <Link
							href='#'
							className='flex w-full items-center py-2 text-lg font-semibold'
							prefetch={false}>
							Home
						</Link> */}

					<Link
						href='/o_nas'
						className={
							hidden === 'about'
								? 'text-center my-0.5 py-0.5 text-xl font-semibold text-rose-300 pointer-events-none'
								: 'text-center my-0.5 py-0.5 text-xl font-semibold'
						}
						prefetch={false}>
						O Nas
					</Link>
					<Link
						href='/pracownie'
						className={
							hidden === 'workshops'
								? 'text-center my-0.5 py-0.5 text-xl font-semibold text-rose-300 pointer-events-none'
								: 'text-center my-0.5 py-0.5 text-xl font-semibold'
						}
						prefetch={false}>
						Pracownie
					</Link>
					<Link
						href='/kalendarz'
						className={
							hidden === 'calendar'
								? 'text-center my-0.5 py-0.5 text-xl font-semibold text-rose-300 pointer-events-none'
								: 'text-center my-0.5 py-0.5 text-xl font-semibold'
						}
						prefetch={false}>
						Kalendarz
					</Link>
					<Link
						href='/kontakt'
						className={
							hidden === 'contact'
								? 'text-center my-0.5 py-0.5 text-xl font-semibold text-rose-300 pointer-events-none'
								: 'text-center my-0.5 py-0.5 text-xl font-semibold'
						}
						prefetch={false}>
						Kontakt
					</Link>
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default Navigation
