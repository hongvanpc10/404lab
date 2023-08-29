import { BlogCardHorizontal } from '@/components/blogCard'
import { ArrowRight2, Edit } from 'iconsax-react'
import Link from 'next/link'

export default function BlogsByTag() {
	return (
		<div className='max-w-3xl mx-auto'>
			<div className='flex items-center justify-center flex-col py-14 bg-gray-900 rounded'>
				<h1 className='text-3xl font-bold'>PYTHON</h1>
				<div className='flex items-center mt-6 mb-4 text-gray-300'>
					<Edit size='1.125rem' className='mr-2' />
					15 bài viết
				</div>
				<p className=' text-gray-300'>
					Tổng hợp các bài viết chia sẻ kỹ thuật lập trình về Python
				</p>
			</div>

			<div className='mt-16 space-y-8'>
				<BlogCardHorizontal />
				<BlogCardHorizontal />
				<BlogCardHorizontal />
				<BlogCardHorizontal />
				<BlogCardHorizontal />
				<BlogCardHorizontal />
			</div>

			<div className='mt-20 grid grid-cols-3'>
				<div></div>
				<div className='flex justify-center text-lg'>Page 1 of 3</div>
				<div className='flex justify-end'>
					<Link href={''} className='flex items-center rounded text-sm bg-emerald-500 py-2 px-6 transition hover:bg-amber-600'>
						Next <ArrowRight2 size='1em' className='ml-1' />
					</Link>
				</div>
			</div>
		</div>
	)
}
