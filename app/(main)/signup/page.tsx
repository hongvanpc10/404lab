'use client'

import Input from '@/components/input'
import routes from '@/configs/routes'
import Link from 'next/link'
import ReCAPTCHA from "react-google-recaptcha";


export default function SignUp() {
	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-3xl mb-4 font-bold'>
				Đăng kí thành viên 404Lab
			</h1>
			<p className='text-[0.9375rem] text-gray-300 mb-10'>
				200Lab - Chia sẻ kỹ thuật lập trình
			</p>
			<form className='w-full max-w-md space-y-4'>
				<Input placeholder='Nhập tên của bạn' autoFocus />
				<Input placeholder='Nhập email của bạn' type='email' />
				<Input placeholder='Nhập mật khẩu của bạn' type='password' />

				<ReCAPTCHA
					hl='vi'
					sitekey='6Ld9UOonAAAAACT5CcVofLXY-S7NgGcZmOXDDv6y'
					onChange={console.log}
				/>

				<button className='!mt-10 transition hover:bg-orange-800 py-4 w-full rounded-full text-white bg-emerald-500'>
					Đăng kí
				</button>
			</form>
			<p className='mt-6 text-center text-gray-300'>
				Bạn đã đăng kí thành viên rồi?{' '}
				<Link href={routes.login} className='text-emerald-500 ml-1'>
					Đăng nhập
				</Link>
			</p>
		</div>
	)
}
