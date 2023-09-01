import { TextareaHTMLAttributes } from 'react'

export default function Textarea(
	props: TextareaHTMLAttributes<HTMLTextAreaElement>
) {
	return (
		<textarea
			{...props}
			className='outline-none w-full bg-gray-900 py-5 px-8 [clip-path:polygon(1rem_0,calc(100%-1rem)_0,100%_70%,calc(100%-1rem)_100%,1rem_100%,0%_30%)]'
		/>
	)
}
