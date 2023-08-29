import { BlogCard, FeaturedBlogCard } from '@/components/blogCard'
import Title from '@/components/home/title'

export default function Home() {
	return (
		<div className='space-y-20'>
			<section>
				<Title href='/all'>BÀI VIẾT MỚI</Title>

				<div className='grid-cols-3 gap-6 grid'>
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</div>
			</section>

			<section>
				<Title>BÀI VIẾT NỔI BẬT</Title>

				<div className='grid grid-cols-3 gap-6 grid-rows-2'>
					<FeaturedBlogCard className='col-span-2 row-span-2' />
					<FeaturedBlogCard />
					<FeaturedBlogCard />
				</div>
			</section>

			<section>
				<Title href='/d'>PYTHON</Title>

				<div className='grid-cols-3 gap-6 grid'>
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</div>
			</section>
		</div>
	)
}
