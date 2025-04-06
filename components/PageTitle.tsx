import React from 'react'

const PageTitle = ({ title }: { title: string }) => {
	return (
		<h1 className='mx-auto text-center  font-calistoga tracking-wider leading-snug text-5xl md:text-6xl text-rose-500 uppercase'>
			{title}
		</h1>
	)
}

export default PageTitle
