import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from '@/components/ui/card'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import logoSmall from '@/public/images/Miasto-Pracownia_Logo_small.png'
import SignInForm from '@/components/SignInForm'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
	title: 'Sign In',
}

const SignInPage = async (props: {
	searchParams: Promise<{ callbackUrl: string }>
}) => {
	const { callbackUrl } = await props.searchParams
	const session = await auth()

	if (session) {
		return redirect(callbackUrl || '/admin/overview')
	}

	return (
		<div className='w-full max-w-md mx-auto'>
			<Card>
				<CardHeader className='space-y-4'>
					<Link href={'/'} className='flex justify-center item'>
						<Image
							src={logoSmall}
							width={200}
							height={200}
							alt='small logo image'
						/>
					</Link>
					{/* <CardTitle className='text-center'>Zaloguj Się</CardTitle> */}
					<CardDescription className='text-center'>
						Zaloguj się jako Admin
					</CardDescription>
					<CardContent className='space-y-4'>
						<SignInForm />
					</CardContent>
				</CardHeader>
			</Card>
		</div>
	)
}

export default SignInPage
