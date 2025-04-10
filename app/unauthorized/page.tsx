import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Nidozwolony dostęp',
}

const Unauthorized = () => {
	return (
		<div className='mx-auto container flex flex-col items-center justify-center space-y-4 h-[calc(100vh-200px)]'>
			<h1 className='text-4xl font-bold'>Brak Dosępu</h1>
			<p className='text-muted-foreground'>Nie masz dostępu do tej strony</p>
			<Button variant={'secondary'} asChild>
				<Link className='text-slate-50' href={'/'}>
					Strona Główna
				</Link>
			</Button>
		</div>
	)
}

export default Unauthorized
