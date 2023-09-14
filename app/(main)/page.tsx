import { BlogCard, FeaturedBlogCard } from '@/components/blogCard';
import Title from '@/components/title';

export default function Home() {
  return (
    <div className="space-y-20">
      <section>
        <Title href="/all">BÀI VIẾT MỚI</Title>

        <div className="lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-6 lg:gap-6 grid">
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

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 lg:grid-rows-2">
          <FeaturedBlogCard className="lg:col-span-2 lg:row-span-2" />
          <FeaturedBlogCard />
          <FeaturedBlogCard />
        </div>
      </section>

      <section>
        <Title href="/d">PYTHON</Title>

        <div className="lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-6 lg:gap-6 grid">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
    </div>
  );
}
