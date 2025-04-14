'use client'

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	ResponsiveContainer,
	CartesianGrid,
	Tooltip,
} from 'recharts'

type ChartsProps = {
	data: { eventsByMonth: { month: string; warsztaty: number }[] }
}

const Charts = ({ data: { eventsByMonth } }: ChartsProps) => {
	return (
		<ResponsiveContainer width='100%' height={350}>
			<BarChart data={eventsByMonth}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis
					dataKey='month'
					stroke='#888888'
					fontSize={12}
					tickLine={false}
					axisLine={false}
				/>

				<YAxis
					stroke='#888888'
					fontSize={12}
					tickLine={false}
					axisLine={false}
					tickFormatter={value => `${value}`}
				/>
				<Tooltip />

				<Bar
					dataKey={'warsztaty'}
					fill='currentColor'
					radius={[25, 25, 0, 0]}
					className='fill-rose-300'
				/>
			</BarChart>
		</ResponsiveContainer>
	)
}

export default Charts
