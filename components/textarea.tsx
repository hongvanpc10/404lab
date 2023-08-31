interface Props {
	placeholder?: string
	name?: string
	type?: 'text' | 'password' | 'email'
	autoFocus?: boolean
	rows?: number
}

export default function Textarea(props: Props) {
	return (
		<textarea
			{...props}
			className='outline-none w-full bg-gray-900 p-5 rounded-xl'
		/>
	)
}
