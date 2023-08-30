'use client'

import Logo from '@/components/logo'
import { Facebook, Instagram, Sun1, Youtube } from 'iconsax-react'
import moment from 'moment'
import 'moment/locale/vi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Search from './search'

export default function Header() {
	const pathname = usePathname()

	return (
		<header>
			<div className='border-b border-emerald-500'>
				<div className='container max-w-6xl text-sm flex items-center justify-between'>
					<div className='flex items-center'>
						<div className=' flex items-center space-x-3 text-gray-600'>
							<Facebook
								size='1.5em'
								variant='Bold'
								className='hover:text-emerald-500 transition'
							/>
							<Instagram
								size='1.5em'
								variant='Bold'
								className='hover:text-emerald-500 transition'
							/>
							<Youtube
								size='1.5em'
								variant='Bold'
								className='hover:text-emerald-500 transition'
							/>
						</div>

						<div className='bg-emerald-500 ml-3 [clip-path:polygon(0_0,90%_0,100%_100%,10%_100%)] py-4 px-8'>
							{moment()
								.format('dddd, D [tháng] M, YYYY')
								.split('')
								.map((c, i) => (i === 0 ? c.toUpperCase() : c))
								.join('')}
						</div>
					</div>

					<nav className='flex text-gray-400 items-center space-x-7'>
						<Link
							href={''}
							className='transition hover:text-emerald-500'
						>
							Forum
						</Link>
						<Link
							href={''}
							className='transition hover:text-emerald-500'
						>
							Đăng nhập
						</Link>
						<Link
							href={''}
							className='transition hover:text-emerald-500'
						>
							Đăng kí
						</Link>
					</nav>
				</div>
			</div>

			<div className='container max-w-6xl flex items-center justify-between py-6 lg:flex-row flex-col'>
				<Logo />

				<div className='lg:mt-0 mt-8'>
					<div className='flex items-center'>
						<Search />

						<button className='ml-7'>
							<Sun1 size='1.5em' />
						</button>
					</div>
				</div>
			</div>

			<div className='bg-gray-900'>
				<div className='container max-w-6xl'>
					<nav className='flex w-full no-scrollbar whitespace-nowrap overflow-x-auto overflow-y-hidden space-x-3 items-center mx-auto text-gray-400'>
						{[
							{ name: 'home', href: '/' },
							{ name: 'Chung', href: '/tag/all' },
							{ name: 'javascript', href: '/tag/javascript' },
							{ name: 'python', href: '/tag/python' },
							{ name: 'data', href: '/tag/data' },
							{ name: 'devops', href: '/tag/devops' },
							{ name: 'frontend', href: '/tag/frontend' },
							{ name: 'backend', href: '/tag/backend' },
							{ name: 'flutter', href: '/tag/flutter' },
							{ name: 'tài liệu', href: '/tag/resources' },
							{
								name: 'tips & tricks',
								href: '/tag/tips-and-tricks',
							},
							{ name: 'news', href: '/tag/news' },
							{ name: 'windows', href: '/tag/windows' },
							{ name: 'macos', href: '/tag/macos' },
							{ name: 'phần mềm', href: '/tag/softwares' },
						].map(({ name, href }, index) => {
							const isActive = pathname === href

							return (
								<Link
									key={index}
									href={href}
									className={`pb-4 pt-5 px-2 hover:text-emerald-500 inline-block border-b-4 border-transparent transition ${
										isActive &&
										'text-emerald-500 !border-emerald-500'
									}`}
								>
									{name.toUpperCase()}
								</Link>
							)
						})}
					</nav>
				</div>
			</div>
		</header>
	)
}
