'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from './ui/button'
import { formUrlQuery } from '@/lib/utils'

type PaginationProps = {
	page: number | string
	totalPages: number
	urlParamName?: string
}

const Pagination = ({ page, totalPages, urlParamName }: PaginationProps) => {
	const router = useRouter()
	const searchParams = useSearchParams()

	const handleClick = (btnType: string) => {
		const pageValue = btnType === 'next' ? Number(page) + 1 : Number(page) - 1
		const newUrl = formUrlQuery({
			params: searchParams.toString(),
			key: urlParamName || 'page',
			value: pageValue.toString(),
		})

		router.push(newUrl)
	}

	return (
		<div className='flex items-center gap-x-4 mt-6'>
			<Button
				size={'sm'}
				variant='outline'
				className='w-28'
				disabled={Number(page) <= 1}
				onClick={() => handleClick('prev')}>
				Wróć
			</Button>
			<Button
				size={'sm'}
				variant='outline'
				className='w-28'
				disabled={Number(page) >= totalPages}
				onClick={() => handleClick('next')}>
				Dalej
			</Button>
			<p className='font-semibold'>
				{page} / {totalPages}
			</p>
		</div>
	)
}

export default Pagination
