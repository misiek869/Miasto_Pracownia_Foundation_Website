import dayjs, { Dayjs } from 'dayjs'

export const generateDate = (
	month: number = dayjs().month(),
	year: number = dayjs().year()
): { currentMonth: boolean; date: Dayjs; today?: boolean }[] => {
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
		arrayOfDate.push({
			currentMonth: true,
			date: firstDateOfMOnth.date(i),
			today:
				firstDateOfMOnth.date(i).toDate().toDateString() ===
				dayjs().toDate.toString(),
		})
	}

	const remaining = 42 - arrayOfDate.length
	for (
		let i = lastDateOfMOnth.date() + 1;
		i <= lastDateOfMOnth.date() + remaining;
		i++
	) {
		arrayOfDate.push({ currentMonth: false, date: lastDateOfMOnth.date(i) })
	}

	return arrayOfDate
}
