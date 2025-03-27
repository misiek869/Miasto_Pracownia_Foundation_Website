import type { Metadata } from 'next'
import { Montserrat, Calistoga } from 'next/font/google'
import './globals.css'

const calistoga = Calistoga({
	variable: '--font-calistoga',
	subsets: ['latin'],
	weight: '400',
})

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Fundacja Miasto Pracownia',
	description: 'Fundacja Miasto Pracownia - twórcze działania',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${calistoga.variable} ${montserrat.variable}   antialiased`}>
				{children}
			</body>
		</html>
	)
}
