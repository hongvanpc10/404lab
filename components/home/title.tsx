import { ArrowRight } from 'iconsax-react'
import Link from 'next/link'

export default function Title({
	children,
	href,
}: {
	children: string
	href?: string
}) {
	return (
		<div className='flex items-center mb-9 justify-between'>
			<h2 className='flex items-center text-2xl font-bold'>
				<div className='space-y-1.5 mr-6'>
					<div className='h-0.5 w-12 bg-emerald-500' />
					<div className='h-0.5 w-8 bg-emerald-500' />
					<div className='h-0.5 w-4 bg-emerald-500' />
				</div>

				{children}
			</h2>

			{href && (
				<Link href={href} className='flex group text-sm transition hover:text-emerald-500 items-center'>
                    TẤT CẢ
                    <ArrowRight className='ml-2 transition-[margin] group-hover:mr-0 mr-2 group-hover:ml-4' size='1.25em'/>
				</Link>
			)}
		</div>
	)
}
