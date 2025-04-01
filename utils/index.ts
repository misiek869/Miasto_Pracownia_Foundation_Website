import dayjs, { Dayjs } from 'dayjs'

export const generateDate = (
	month: number = dayjs().month(),
	year: number = dayjs().year()
): { currentMonth: boolean; date: Dayjs; today?: boolean }[] => {
	const firstDateOfMonth = dayjs().year(year).month(month).startOf('month')
	const lastDateOfMonth = dayjs().year(year).month(month).endOf('month')

	const arrayOfDate = []

	// generate prefix date
	for (let i = 0; i < firstDateOfMonth.day(); i++) {
		arrayOfDate.push({ currentMonth: false, date: firstDateOfMonth.day(i) })
	}

	// generate suffix date

	// generate current date
	for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
		arrayOfDate.push({
			currentMonth: true,
			date: firstDateOfMonth.date(i),
			today:
				firstDateOfMonth.date(i).toDate().toDateString() ===
				dayjs().toDate().toDateString(),
		})
	}

	const remaining = 42 - arrayOfDate.length
	for (
		let i = lastDateOfMonth.date() + 1;
		i <= lastDateOfMonth.date() + remaining;
		i++
	) {
		arrayOfDate.push({ currentMonth: false, date: lastDateOfMonth.date(i) })
	}

	return arrayOfDate
}

export const months = [
	'Styczeń',
	'Luty',
	'Marzec',
	'Kwiecień',
	'Maj',
	'Czerwiec',
	'Lipiec',
	'Sierpień',
	'Wrzesień',
	'Październik',
	'Listopad',
	'Grudzień',
]

export const formatDate = (date: Dayjs): string => {
	const dateString = date.toDate().toDateString()
	const newDate = new Date(dateString)
	const formattedDate = newDate.toISOString().split('T')[0]

	return formattedDate
}
