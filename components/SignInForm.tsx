'use client'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { signInWithCredentials } from '@/lib/actions/user.actions'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

const SignInForm = () => {
	const [data, action] = useActionState(signInWithCredentials, {
		success: false,
		message: '',
	})

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
			<div className='space-y-6'>
				<div>
					<Label htmlFor='email'>Email</Label>
					<Input
						id='email'
						name='email'
						type='email'
						required
						autoComplete='email'
						defaultValue={'michal@michal.pl'}
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
						defaultValue={'123456'}
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
