'use client'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { signInWithCredentials } from '@/lib/actions/user.actions'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { useSearchParams } from 'next/navigation'

const SignInForm = () => {
	const [data, action] = useActionState(signInWithCredentials, {
		success: false,
		message: '',
	})

	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl' || '/')

	const SingInButton = () => {
		const { pending } = useFormStatus()
		return (
			<Button
				className='w-full text-gray-900 cursor-pointer'
				disabled={pending}>
				{pending ? 'Logowanie' : 'Zaloguj'}
			</Button>
		)
	}

	return (
		<form action={action}>
			<input type={'hidden'} name='callbackUrl' value={callbackUrl} />
			<div className='space-y-6'>
				<div>
					<Label htmlFor='email'>Email</Label>
					<Input
						id='email'
						name='email'
						type='email'
						required
						autoComplete='email'
					/>
				</div>
				<div>
					<Label htmlFor='password'>Hasło</Label>
					<Input
						id='password'
						name='password'
						type='password'
						required
						autoComplete='password'
					/>
				</div>
				<div className=''>
					<SingInButton />
				</div>
				{data && !data.success && <div className=''>{data.message}</div>}
			</div>
		</form>
	)
}

export default SignInForm
