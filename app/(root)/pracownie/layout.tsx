import React from 'react'

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<div className='px-4 bg-[var(--primary)] pt-20 min-h-screen relative flex flex-col md:justify-center'>
			{children}
		</div>
	)
}

export default RootLayout
