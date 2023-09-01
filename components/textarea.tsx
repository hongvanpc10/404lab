import { TextareaHTMLAttributes } from 'react'

export default function Textarea(
	props: TextareaHTMLAttributes<HTMLTextAreaElement>
) {
	return (
		<textarea
			{...props}
			className='outline-none w-full bg-gray-900 py-5 px-8 [clip-path:polygon(2%_0,98%_0,100%_70%,98%_100%,2%_100%,0%_30%)]'
		/>
	)
}
