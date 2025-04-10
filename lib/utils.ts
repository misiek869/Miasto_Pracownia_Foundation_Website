import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import qs from 'query-string'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function convertToPlainObject<T>(value: T): T {
	return JSON.parse(JSON.stringify(value))
}

export function formatId(id: string) {
	return `..${id.substring(id.length - 6)}`
}

export function formUrlQuery({
	params,
	key,
	value,
}: {
	params: string
	key: string
	value: string | null
}) {
	const query = qs.parse(params)

	query[key] = value

	return qs.stringifyUrl(
		{
			url: window.location.pathname,
			query,
		},
		{
			skipNull: true,
		}
	)
}
