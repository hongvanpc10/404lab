import { ArrowRight } from 'iconsax-react'
import Link from 'next/link'

interface Props {
	children: string
	href?: string
	className?: string
}

export default function Title({ children, href, className }: Props) {
	return (
		<div
			className={`flex items-center mb-9 text-2xl justify-between ${className}`}
		>
			<h2 className='flex items-center font-bold'>
				<div className='space-y-[0.225em] mr-[1em]'>
					<div className='h-[0.1em] w-[1.25em] bg-emerald-500' />
					<div className='h-[0.1em] w-[2em] bg-emerald-500' />
					<div className='h-[0.1em] w-[0.75em] bg-emerald-500' />
				</div>

				{children}
			</h2>

			{href && (
				<Link
					href={href}
					className='flex group text-sm transition hover:text-emerald-500 items-center'
				>
					TẤT CẢ
					<ArrowRight
						className='ml-2 transition-[margin] group-hover:mr-0 mr-2 group-hover:ml-4'
						size='1.25em'
					/>
				</Link>
			)}
		</div>
	)
}
