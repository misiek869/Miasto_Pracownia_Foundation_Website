import React from 'react'

const PageTitle = ({ title }: { title: string }) => {
	return (
		<h1 className='mx-auto text-center  font-calistoga tracking-wider leading-snug text-2xl md:text-3xl xl:text-4xl text-slate-50 bg-gray-900 uppercase px-10 py-2 rounded-full'>
			{title}
		</h1>
	)
}

export default PageTitle
