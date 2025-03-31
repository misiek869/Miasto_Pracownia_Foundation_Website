import dayjs, { Dayjs } from 'dayjs'

export const generateDate = (
	month: number = dayjs().month(),
	year: number = dayjs().year()
): Dayjs[] => {
	const firstDateOfMOnth = dayjs().year(year).month(month).startOf('month')
	const lastDateOfMOnth = dayjs().year(year).month(month).endOf('month')

	const arrayOfDate = []

	// generate prefix date
	for (let i = 0; i < firstDateOfMOnth.day(); i++) {
		arrayOfDate.push({ currentMonth: false, date: firstDateOfMOnth.day(i) })
	}

	// generate suffix date

	// generate current date
	for (let i = firstDateOfMOnth.date(); i <= lastDateOfMOnth.date(); i++) {
		arrayOfDate.push(firstDateOfMOnth.date(i))
	}

	const remaining = 42 - arrayOfDate.length
	for (
		let i = lastDateOfMOnth.date() + 1;
		i <= lastDateOfMOnth.date() + remaining;
		i++
	) {
		arrayOfDate.push({ currentMont: false, date: lastDateOfMOnth.date(i) })
	}

	return arrayOfDate
}
