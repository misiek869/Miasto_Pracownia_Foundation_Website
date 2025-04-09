import { Button } from './ui/button'
import Link from 'next/link'
import { auth } from '@/auth'
import { signOutUser } from '@/lib/actions/user.actions'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const UserButton = async () => {
	const session = await auth()

	if (!session) {
		return
	}

	const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? ''

	return (
		<div className='flex gap-2 items-center'>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<div className='flex items-center'>
						<Button
							variant={'ghost'}
							className='relative w-8 h-8 rounded-full ml-2 flex items-center justify-center bg-rose-300'>
							{firstInitial}
						</Button>
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='w-56' align='end' forceMount>
					<DropdownMenuLabel className='font-normal'>
						<div className='flex flex-col space-y-1'>
							<div className='text-sm font-medium leading-none'>
								{session.user?.name}
							</div>
							<div className='text-sm text-muted-foreground leading-none'>
								{session.user?.email}
							</div>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem className='p-0 mb-1 mt-2'>
						<form action={signOutUser} className='w-full'>
							<Button
								className='w-full px-2 py-4 justify-start'
								variant={'outline'}>
								Wyloguj
							</Button>
						</form>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export default UserButton
