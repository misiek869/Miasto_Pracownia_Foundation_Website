import React from 'react'

const PageTitle = ({
	title,
	bgColor = 'bg-gray-900',
}: {
	title: string
	bgColor?: string
}) => {
	return (
		<div className='flex'>
			<h1
				className={`mx-auto text-center  font-calistoga tracking-widest leading-snug text-2xl sm:text-3xl lg:text-5xl text-slate-50 ${bgColor} uppercase px-10 md:px-20 py-2 rounded-full shadow-xl`}>
				{title}
			</h1>
		</div>
	)
}

export default PageTitle
