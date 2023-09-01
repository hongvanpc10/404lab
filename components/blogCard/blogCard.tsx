import moment from 'moment'
import Link from 'next/link'
import Image from '../image'

export default function BlogCard() {
	return (
		<div>
			<Link href={'/regferg'}>
				<Image
					alt=''
					src='https://statics.cdn.200lab.io/2022/11/web-development-la--gi--.png'
					className='aspect-w-16 aspect-h-10'
				/>
			</Link>
			<h3 className='mt-2 mb-1.5 text-lg font-medium transition hover:text-emerald-500'>
				<Link href={'/ergerg'} className='line-clamp-2'>
					Web Developer là gì? Tìm hiểu về Web Development A - Z
				</Link>
			</h3>
			<div className='flex items-center mb-2 text-sm text-gray-300'>
				<i className='ri-calendar-check-line ri-lg mr-2'></i>
				{moment().format('D [Thg] M, YYYY')}
				<div className='w-1 h-1 rounded-full bg-current mx-2' />
				10 phút đọc
			</div>
		</div>
	)
}
