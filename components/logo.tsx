import fonts from '@/configs/fonts'
import routes from '@/configs/routes'
import Link from 'next/link'

export default function Logo() {
	return (
		<Link
			href={routes.home}
			className={`text-4xl ${fonts.nunito.className} inline-flex items-start font-bold tracking-wider`}
		>
			<span className='text-emerald-500'>404</span>
			<span>Lab</span>
			<span className='inline-block rounded-sm font-semibold px-1 text-xs ml-1 mt-1.5 bg-emerald-500'>
				Blog
			</span>
		</Link>
	)
}
