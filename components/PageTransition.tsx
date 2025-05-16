'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const PageTransition = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	const pathname = usePathname()

	return (
		<AnimatePresence>
			<motion.div
				className='min-h-screen w-screen fixed top-0 pointer-events-none'
				initial={{ opacity: 1 }}
				animate={{
					opacity: 0,
					transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
				}}
			/>
			<div key={pathname}>{children}</div>
		</AnimatePresence>
	)
}

export default PageTransition
