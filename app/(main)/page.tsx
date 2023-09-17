'use client';

import blogsService from '@/apiServices/blogs';
import tagsService from '@/apiServices/tags';
import { BlogCard, FeaturedBlogCard } from '@/components/blogCard';
import Title from '@/components/title';
import queryKeys from '@/configs/queryKeys';
import routes from '@/configs/routes';
import { useQueries, useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data: blogs } = useQuery(queryKeys.blogs({ limit: 6 }), () =>
    blogsService.getBlogs({ limit: 6 }),
  );

  const { data: tags } = useQuery(queryKeys.tags, () =>
    tagsService.getAllTags(),
  );

  const blogsByTags = useQueries({
    queries: tags
      ? tags?.map((tag) => ({
          queryKey: queryKeys.blogsByTag(tag._id, { limit: 6 }),
          queryFn: () => blogsService.getBlogsByTag(tag._id, { limit: 6 }),
          enable: tags,
        }))
      : [],
  });

  const { data: featuredBlogs } = useQuery(queryKeys.blogs({ limit: 3 }), () =>
    blogsService.getBlogs({ limit: 3 }),
  );

  return (
    <div className="space-y-20">
      {blogs && (
        <section>
          <Title href={routes.allBlogs}>BÀI VIẾT MỚI</Title>

          <div className="lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-6 lg:gap-6 grid">
            {blogs.data.map((blog, index) => (
              <BlogCard key={index} data={blog} />
            ))}
          </div>
        </section>
      )}

      {featuredBlogs && (
        <section>
          <Title>BÀI VIẾT NỔI BẬT</Title>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 lg:grid-rows-2">
            {featuredBlogs.data.map((blog, index) => (
              <FeaturedBlogCard
                key={index}
                data={blog}
                className={`${index === 0 && 'lg:col-span-2 lg:row-span-2'}`}
              />
            ))}
          </div>
        </section>
      )}

      {blogsByTags &&
        blogsByTags
          .map((query) => query.data)
          .filter((res) => res && res.data.length > 0)
          .map(
            (res, index) =>
              res && (
                <section key={index}>
                  <Title href={routes.blogsByTag(res.tag.slug)}>
                    {res.tag.name}
                  </Title>

                  <div className="lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-6 lg:gap-6 grid">
                    {res.data.map((blog, index) => (
                      <BlogCard data={blog} key={index} />
                    ))}
                  </div>
                </section>
              ),
          )}
    </div>
  );
}
