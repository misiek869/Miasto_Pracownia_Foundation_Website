import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { GiFlamingo } from 'react-icons/gi'

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
				{/* {disabled ? (
						<div className='ml-6 mt-4 flex'>
							<GiFlamingo className='h-12 w-12 text-rose-500' />
						</div>
					) : (
						<Link href='/' className='ml-6 mt-4 flex' prefetch={false}>
							<GiFlamingo className='h-12 w-12 text-rose-500' />
						</Link>
					)} */}

				<div className='grid gap-2 py-6 justify-center '>
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
								? 'hidden'
								: 'text-center py-2 text-xl font-semibold'
						}
						prefetch={false}>
						O Nas
					</Link>
					<Link
						href='/pracownie'
						className={
							hidden === 'workshops'
								? 'hidden'
								: 'text-center py-2 text-xl font-semibold'
						}
						prefetch={false}>
						Pracownie
					</Link>
					<Link
						href='/kalendarz'
						className={
							hidden === 'calendar'
								? 'hidden'
								: 'text-center py-2 text-xl font-semibold'
						}
						prefetch={false}>
						Kalendarz
					</Link>
					<Link
						href='/kontakt'
						className={
							hidden === 'contact'
								? 'hidden'
								: 'text-center py-2 text-xl font-semibold'
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
