'use client'

import Input from '@/components/input'
import Checkbox from '@/components/checkbox'
import TextEditor from '@/components/textEditor'
import Textarea from '@/components/textarea'
import { useState } from 'react'

export default function NewBlog() {
	const [imageType, setImageType] = useState(0)

	return (
		<div className='flex flex-col items-center mx-auto max-w-5xl'>
			<h1 className='text-3xl mb-4 font-bold'>
				Tạo bài viết mới trên 404Lab
			</h1>
			<p className='text-[0.9375rem] text-gray-300 mb-10'>
				Chia sẻ ý tưởng, kiến thức, kinh nghiệm của bạn cho mọi người
			</p>

			<form className='w-full space-y-10'>
				<div>
					<label className='text-lg mb-2 inline-block'>Tiêu đề</label>
					<Input placeholder='Nhập tiêu đề bài viết' autoFocus />
				</div>

				<div>
					<label className='text-lg mb-2 inline-block'>
						Mô tả{' '}
						<small className='text-gray-400 ml-1 text-sm'>
							(Optional)
						</small>
					</label>
					<Textarea rows={4} placeholder='Nhập mô tả bài viết' />
				</div>

				<div>
					<div className='flex items-center mb-6'>
						<label className='text-lg inline-block'>Hình ảnh</label>
						<div className='flex items-center ml-10 text-gray-400 text-sm'>
							<Checkbox
								value={0}
								name='imageType'
								checked={!imageType}
								onChange={() => setImageType(0)}
							/>
							<span className='ml-2 mr-4'>Tải lên</span>
							<Checkbox
								value={1}
								name='imageType'
								checked={imageType === 1}
								onChange={() => setImageType(1)}
							/>
							<span className='ml-2'>Url</span>
						</div>
					</div>

					{imageType ? (
						<div className='flex'>
							<Input
								type='url'
								autoFocus
								placeholder='Nhập url hình ảnh thumbnail'
							/>
							<button
								type='button'
								className='text-emerald-500 whitespace-nowrap py-2 px-4'
							>
								Load
							</button>
						</div>
					) : (
						<>
							<input type='file' hidden id='thumbnail' />
							<label
								htmlFor='thumbnail'
								className='py-2 px-6 rounded-sm bg-emerald-500'
							>
								Tải lên
							</label>
						</>
					)}
				</div>

				<div>
					<label className='text-lg mb-2 inline-block'>
						Nội dung
					</label>
					<TextEditor />
				</div>

				<div className='flex justify-end !mt-14'>
					<button className='px-8 py-3 rounded-sm transition hover:bg-emerald-600 bg-emerald-500'>
						Đăng bài viết
					</button>
				</div>
			</form>
		</div>
	)
}
