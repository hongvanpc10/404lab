import Image from '@/components/image'
import Input from '@/components/input'
import Link from 'next/link'

export default function Account() {
	return (
		<div className='grid grid-cols-12 max-w-5xl mx-auto gap-10'>
			<div className='col-span-4'>
				<div className='bg-gray-900'>
					<div className='relative'>
						<Image
							alt=''
							src='https://i.pinimg.com/550x/17/00/49/170049bff33ceaa7195ad7f31b58b039.jpg'
							className='w-full aspect-w-16 aspect-h-12'
						/>
						<button className='absolute bottom-4 transition hover:bg-gray-900/60 right-4 flex items-center justify-center rounded-full w-10 h-10 bg-gray-900/50 text-white'>
							<i className='ri-image-edit-line ri-lg'></i>
						</button>
					</div>
					<div className='p-4'>
						<h2 className='text-xl font-bold'>Hong Van</h2>
						<p className='text-gray-300 mt-4'>
							make impossible to possible
						</p>
						<div className='text-gray-400 mt-4'>
							<span>Follow me:</span>
							<div className='flex items-center space-x-2 ml-3'>
								<Link
									href={''}
									className='transition hover:text-emerald-500 text-lg'
								>
									<i className='ri-facebook-circle-fill'></i>
								</Link>
								<Link
									href={''}
									className='transition hover:text-emerald-500 text-lg'
								>
									<i className='ri-linkedin-box-fill'></i>
								</Link>
								<Link
									href={''}
									className='transition hover:text-emerald-500 text-lg'
								>
									<i className='ri-youtube-fill'></i>
								</Link>
								<Link
									href={''}
									className='transition hover:text-emerald-500 text-lg'
								>
									<i className='ri-earth-fill'></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='col-span-8'>
				<form className='space-y-6'>
					<div>
						<label className='text-lg mb-2 inline-block'>
							Tên hiển thị
						</label>
						<Input
							placeholder='Nhập tên hiển thị của bạn'
							defaultValue={'Hong Van'}
						/>
					</div>
					<div>
						<label className='text-lg mb-2 inline-block'>
							Giới thiệu
						</label>
						<Input
							placeholder='Nhập phần giới thiệu của bạn'
							defaultValue={'make impossible to possible'}
						/>
					</div>
					<div>
						<label className='text-lg mb-2 inline-block'>
							Liên kết
						</label>
						<div className='space-y-3'>
							<Input placeholder='Nhập url Facebook của bạn' />
							<Input placeholder='Nhập url website của bạn' />
							<Input placeholder='Nhập url Youtube của bạn' />
							<Input placeholder='Nhập url Linkedin của bạn' />
						</div>
					</div>

					<div className='flex justify-end !mt-10 mr-4 rounded-sm'>
						<button className='py-3 px-8 bg-emerald-500 transition hover:bg-emerald-600 text-white'>
							Lưu thay đổi
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
