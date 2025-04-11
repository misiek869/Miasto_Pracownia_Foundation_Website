'use client'

import { Button } from './ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'

type User = {
	name?: string | null
	email?: string | null
	role?: string
}

const UserButton = ({ user }: { user?: User }) => {
	const router = useRouter()

	const firstInitial = user?.name?.charAt(0).toUpperCase() ?? ''

	const handleSignOut = async () => {
		await signOut({ redirect: false })
		router.push('/')
		router.refresh()
	}

	if (!user) {
		return null
	}

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
								{user?.name}
							</div>
							<div className='text-sm text-muted-foreground leading-none'>
								{user?.email}
							</div>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem className='p-0 mb-1 mt-2'>
						<Button
							onClick={handleSignOut}
							className='w-full px-2 py-4 justify-start'
							variant={'outline'}>
							Wyloguj
						</Button>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export default UserButton
