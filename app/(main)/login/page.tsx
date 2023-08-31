import Input from '@/components/input'
import routes from '@/configs/routes'
import Link from 'next/link'

export default function Login() {
	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-3xl mb-4 font-bold'>Welcome back!</h1>
			<p className='text-[0.9375rem] text-gray-300 mb-10'>
				Hãy đăng nhập để có được quyền lợi của thành viên
			</p>
			<form className='w-full max-w-md space-y-4'>
				<Input placeholder='Nhập email của bạn' autoFocus type='email' />
				<Input placeholder='Nhập mật khẩu của bạn' type='password' />

				<button className='!mt-10 transition hover:bg-orange-800 py-4 w-full rounded-full text-white bg-emerald-500'>
					Đăng nhập
				</button>
			</form>
			<p className='mt-6 text-center text-gray-300'>
				Bạn chưa là thành viên?{' '}
				<Link href={routes.signup} className='text-emerald-500 ml-1'>
					Đăng kí
				</Link>
			</p>
		</div>
	)
}
