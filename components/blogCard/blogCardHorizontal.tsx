import moment from 'moment'
import Link from 'next/link'
import Image from '../image'
import routes from '@/configs/routes'

export default function BlogCardHorizontal() {
	return (
		<div className='grid grid-cols-5 bg-gray-900 p-4 gap-4'>
			<div className='col-span-3'>
				<h3 className='mb-2 text-lg font-medium transition hover:text-emerald-500'>
					<Link href={''} className='line-clamp-2'>
						Công cụ phát triển website là gì? 18 công cụ phát triển
						website
					</Link>
				</h3>

				<p className='text-[0.9375rem] text-gray-300 line-clamp-2'>
					ReactJS là gì? Vì sao ReactJS cần thiết đối với các nhà lập
					trình web? Cùng tìm hiểu về các ứng dụng và khái niệm cần
					nắm rõ về ReactJS nhé!...
				</p>

				<div className='flex items-center mt-4'>
					<Link href={routes.blogsByAuthor('sdcfdsefe')}>
						<Image
							alt=''
							src='https://statics.cdn.200lab.io/2022/12/Thumbnails-Blog--2-.png?auto=format,compress&width=1500'
							className='w-9 h-9 rounded-full'
						/>
					</Link>

					<div className='ml-3'>
						<h3 className='text-emerald-500'>
							<Link href={routes.blogsByAuthor('sdcfdsefe')}>
								Hồng Văn
							</Link>
						</h3>
						<div className='flex items-center mb-2 text-xs text-gray-400'>
							{moment().format('D [Thg] M, YYYY')}
							<div className='w-1 h-1 rounded-full bg-current mx-2' />
							10 phút đọc
						</div>
					</div>
				</div>
			</div>

			<Link href={'/dfergre'} className='col-span-2'>
				<Image
					alt=''
					src='https://statics.cdn.200lab.io/2022/11/web-development-la--gi--.png'
					className='aspect-w-16 aspect-h-10'
				/>
			</Link>
		</div>
	)
}
