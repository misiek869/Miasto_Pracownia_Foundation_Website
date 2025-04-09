import { Card, CardHeader } from '@/components/ui/card'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Sign In',
}

const SignInPage = () => {
	return (
		<div className='w-full max-w-md mx-auto'>
			<Card>
				<CardHeader className='space-y-4'>
					<Link href={'/'} className=''></Link>
				</CardHeader>
			</Card>
		</div>
	)
}

export default SignInPage
