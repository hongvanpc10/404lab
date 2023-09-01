import { InputHTMLAttributes, useId } from 'react'

export default function Checkbox(props: InputHTMLAttributes<HTMLInputElement>) {
	const id = useId()

	return (
		<div>
			<input type='checkbox' {...props} id={id} hidden className='peer' />
			<label
				htmlFor={id}
				className='inline-flex rounded-sm after:rounded-[1px] items-center justify-center w-5 h-5 bg-gray-900 cursor-pointer after:content-[""] after:inline-block after:w-2.5 after:h-2.5 peer-checked:after:bg-emerald-500'
			></label>
		</div>
	)
}
