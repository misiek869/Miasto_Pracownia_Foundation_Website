import React from 'react'

const AuthLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return <div className='flex flex-center min-h-screen w-full'>{children}</div>
}

export default AuthLayout
