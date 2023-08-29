import Link from 'next/link'
import Logo from './logo'
import routes from '@/configs/routes'

export default function Footer() {
	return (
		<footer>
			<div className='bg-gray-900 py-10'>
				<div className='container max-w-6xl mx-auto gap-8 grid grid-cols-3'>
					<Logo />

					<section>
						<div className='flex items-center mb-4'>
							<h2 className='text-xl font-medium'>
								Bài viết nổi bật
							</h2>
							<div className='h-[1px] ml-4 flex-1 bg-emerald-500' />
						</div>

						<div className='space-y-2'>
							<div className='flex items-start'>
								<div className='w-1.5 h-1.5 mt-2 text-sm rounded-full bg-emerald-500 mr-4' />
								<Link
									href={''}
									className='line-clamp-2 flex-1 text-gray-400 transition hover:text-emerald-500'
								>
									Kafka cơ bản: Cách sử dụng Kafka với
									Confluent & Go Kafka cơ bản: Cách sử dụng
									Kafka với Confluent & Go
								</Link>
							</div>
							<div className='flex items-start'>
								<div className='w-1.5 h-1.5 mt-2 text-sm rounded-full bg-emerald-500 mr-4' />
								<Link
									href={''}
									className='line-clamp-2 flex-1 text-gray-400 transition hover:text-emerald-500'
								>
									Kafka cơ bản: Cách sử dụng Kafka với
									Confluent & Go Kafka cơ bản: Cách sử dụng
									Kafka với Confluent & Go
								</Link>
							</div>
							<div className='flex items-start'>
								<div className='w-1.5 h-1.5 mt-2 text-sm rounded-full bg-emerald-500 mr-4' />
								<Link
									href={''}
									className='line-clamp-2 flex-1 text-gray-400 transition hover:text-emerald-500'
								>
									Kafka cơ bản: Cách sử dụng Kafka với
									Confluent & Go Kafka cơ bản: Cách sử dụng
									Kafka với Confluent & Go
								</Link>
							</div>
							<div className='flex items-start'>
								<div className='w-1.5 h-1.5 mt-2 text-sm rounded-full bg-emerald-500 mr-4' />
								<Link
									href={''}
									className='line-clamp-2 flex-1 text-gray-400 transition hover:text-emerald-500'
								>
									Kafka cơ bản: Cách sử dụng Kafka với
									Confluent & Go Kafka cơ bản: Cách sử dụng
									Kafka với Confluent & Go
								</Link>
							</div>
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

			<div className='flex items-center justify-center h-16'>
				© Copyright 2023 <span className='mx-2'>-</span>
				<Link href={routes.home} className='text-emerald-500'>
					404lab
				</Link>
			</div>
		</footer>
	)
}
