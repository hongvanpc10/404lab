import Link from 'next/link'
import Logo from './logo'
import routes from '@/configs/routes'
import { Facebook, Global, Youtube } from 'iconsax-react'

export default function Footer() {
	return (
		<footer>
			<div className='bg-gray-900 py-10'>
				<div className='container max-w-6xl gap-8 grid grid-cols-3'>
					<Logo />

					<section>
						<div className='flex items-center mb-4'>
							<h2 className='text-xl font-medium'>Liên kết</h2>
							<div className='h-[1px] ml-4 flex-1 bg-emerald-500' />
						</div>

						<div className='space-y-5 text-gray-400 text-[0.9375rem]'>
							<Link href={routes.forum} className='flex items-center transition hover:text-emerald-500'>
								<Global
									size='1.25em'
									variant='Bold'
									className='mr-6'
								/>
								Forum
							</Link>
							<Link href={''} className='flex items-center transition hover:text-emerald-500'>
								<Facebook
									size='1.25em'
									variant='Bold'
									className='mr-6'
								/>
								Facebook
							</Link>
							<Link href={''} className='flex items-center transition hover:text-emerald-500'>
								<Youtube
									size='1.25em'
									variant='Bold'
									className='mr-6'
								/>
								Youtube
							</Link>
						</div>
					</section>

					<section>
						<div className='flex items-center mb-4'>
							<h2 className='text-xl font-medium'>Tags</h2>
							<div className='h-[1px] ml-4 flex-1 bg-emerald-500' />
						</div>

						<div className='flex items-center flex-wrap'>
							{[
								'javascript',
								'python',
								'data',
								'devops',
								'frontend',
								'backend',
								'flutter',
								'tài liệu',
								'tips & tricks',
								'news',
								'windows',
								'macos',
								'phần mềm',
							].map((tag, index) => (
								<Link
									key={index}
									href={''}
									className='py-2 px-3 transition hover:bg-emerald-500 hover:text-white rounded text-sm bg-gray-800 text-gray-400 mr-2 mb-2'
								>
									{tag
										.split('')
										.map((c, i) =>
											i === 0 ? c.toUpperCase() : c
										)
										.join('')}
								</Link>
							))}
						</div>
					</section>
				</div>
			</div>

			<div className='flex items-center bg-gray-900/60 justify-center h-16'>
				© Copyright 2023 <span className='mx-2'>-</span>
				<Link href={routes.home} className='text-emerald-500'>
					404Lab
				</Link>
			</div>
		</footer>
	)
}
