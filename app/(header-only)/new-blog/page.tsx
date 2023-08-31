import Input from '@/components/input'
import TextEditor from '@/components/textEditor'
import Textarea from '@/components/textarea'

export default function NewBlog() {
	return (
		<div className='flex flex-col items-center mx-auto max-w-5xl'>
			<h1 className='text-3xl mb-4 font-bold'>
				Tạo bài viết mới trên 404Lab
			</h1>
			<p className='text-[0.9375rem] text-gray-300 mb-10'>
				Chia sẻ ý tưởng, kiến thức, kinh nghiệm của bạn cho mọi người
			</p>

			<form className='w-full space-y-6'>
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
					<Textarea
						rows={4}
						placeholder='Nhập tiêu đề bài viết'
						autoFocus
					/>
				</div>

				<div>
					<label className='text-lg mb-2 inline-block'>
						Nội dụng
					</label>
					<TextEditor />
				</div>
			</form>
		</div>
	)
}
