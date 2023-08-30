import { BlogCardHorizontal } from '@/components/blogCard'
import Image from '@/components/image'
import Title from '@/components/title'
import routes from '@/configs/routes'
import { Apple, Clock, Copy, Facebook, Home, Instagram } from 'iconsax-react'
import moment from 'moment'
import Link from 'next/link'

export default function BlogDetail() {
	return (
		<div>
			<div className='flex mb-10 items-center text-[0.9375rem] text-gray-400'>
				<Link href={routes.home} className='flex items-center'>
					<Home size='1em' className='mr-2' variant='Bold' /> Home
				</Link>
				<span className='mx-2.5'>/</span>
				<Link href={''} className='text-emerald-500'>
					Web Developer là gì? Tìm hiểu về Web Development A - Z
				</Link>
			</div>

			<div className='pb-5 border-b border-gray-600'>
				<h1 className='text-4xl font-bold'>
					Web Developer là gì? Tìm hiểu về Web Development A - Z
				</h1>

				<div className='flex items-center justify-between mt-4 text-sm text-gray-400'>
					<div className='flex items-center'>
						Đăng bởi
						<Link href={''} className='text-emerald-500 ml-1.5'>
							Hồng Văn
						</Link>
						<span className='mx-2.5'>|</span>
						{moment().format('D [thg] M, YYYY')}
					</div>

					<span className='flex items-center'>
						<Clock size='1.125em' className='mr-2' />
						10 phút đọc
					</span>
				</div>
			</div>

			<div className='flex items-center mt-6 mb-10'>
				<span className='text-gray-400 mr-4'>Chia sẻ bài viết:</span>
				<div className='flex items-center space-x-3'>
					<button className='bg-blue-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-2 px-1.5'>
						<Facebook size='1.25em' />
					</button>
					<button className='bg-purple-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-2 px-1.5'>
						<Instagram size='1.25em' />
					</button>
					<button className='bg-gray-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-2 px-1.5'>
						<Apple size='1.25em' />
					</button>
					<button className='bg-rose-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-2 px-1.5'>
						<Copy size='1.25em' />
					</button>
				</div>
			</div>

			<Image
				alt=''
				src='https://statics.cdn.200lab.io/2022/11/web-development-la--gi--.png'
				className='aspect-w-16 aspect-h-9 rounded'
			/>

			<p></p>

			<div className='h-0.5 bg-gray-700 mt-14 mb-8' />

			<div className='flex items-center flex-wrap'>
				<Link
					href={''}
					className='py-1.5 px-4 rounded transition hover:bg-emerald-500 text-[0.9375rem] bg-gray-700 mr-2.5 mb-2'
				>
					#python
				</Link>
				<Link
					href={''}
					className='py-1.5 px-4 rounded transition hover:bg-emerald-500 text-[0.9375rem] bg-gray-700 mr-2.5 mb-2'
				>
					#tài liệu
				</Link>
			</div>

			<div className='max-w-3xl mt-16 mx-auto'>
				<Title>Bài viết liên quan</Title>

				<div className='space-y-8'>
					<BlogCardHorizontal />
					<BlogCardHorizontal />
					<BlogCardHorizontal />
					<BlogCardHorizontal />
				</div>
			</div>
		</div>
	)
}
