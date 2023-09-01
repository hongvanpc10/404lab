import { InputHTMLAttributes } from 'react'

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
	return (
		<input
			{...props}
			className='outline-none w-full bg-gray-900 py-4 px-10 [clip-path:polygon(2%_0,98%_0,100%_70%,98%_100%,2%_100%,0%_30%)]'
		/>
	)
}
