import { CalendarTick } from 'iconsax-react'
import Image from '../image'
import moment from 'moment'
import Link from 'next/link'

interface Props {
	className?: string
}

export default function FeaturedBlogCard({ className }: Props) {
	return (
		<div className={`relative h-full ${className}`}>
			<Image
				alt=''
				src='https://statics.cdn.200lab.io/2022/11/web-development-la--gi--.png'
				className='aspect-w-16 h-full aspect-h-12 rounded-sm'
			/>
			<Link href={''}>
				<div className='bg-gradient-to-t from-black/90 to-transparent absolute inset-0' />
			</Link>
			<div className='absolute inset-x-0 bottom-0 p-5'>
				<div className='flex items-center mb-1.5 text-sm text-gray-300'>
					<CalendarTick size='1.25em' className='mr-2' />
					{moment().format('D [Thg] M, YYYY')}
					<div className='w-1 h-1 rounded-full bg-current mx-2' />
					10 phút đọc
				</div>
				<h3 className='text-2xl font-medium transition hover:text-emerald-500'>
					<Link href={''}>
						Web Developer là gì? Tìm hiểu về Web Development A - Z
					</Link>
				</h3>
			</div>
		</div>
	)
}
