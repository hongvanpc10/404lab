interface Props {
	placeholder?: string
	name?: string
    type?: 'text' | 'password' | 'email'
    autoFocus?: boolean
}

export default function Input(props: Props) {
	return (
		<input
			{...props}
			className='outline-none w-full bg-gray-900 py-4 px-10 rounded-full'
		/>
	)
}
