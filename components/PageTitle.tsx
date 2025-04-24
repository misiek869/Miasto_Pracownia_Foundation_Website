import React from 'react'

const PageTitle = ({ title }: { title: string }) => {
	return (
		<div className='flex'>
			<h1 className='mx-auto text-center  font-calistoga tracking-widest leading-snug text-3xl lg:text-5xl text-slate-50 bg-gray-900 uppercase px-20 py-2 rounded-full shadow-xl'>
				{title}
			</h1>
		</div>
	)
}

export default PageTitle
