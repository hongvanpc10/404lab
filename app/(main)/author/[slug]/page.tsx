'use client';

import blogsService from '@/apiServices/blogs';
import usersService from '@/apiServices/users';
import { BlogCardHorizontal } from '@/components/blogCard';
import Image from '@/components/image';
import NotFound from '@/components/notFound';
import queryKeys from '@/configs/queryKeys';
import routes from '@/configs/routes';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function BlogsByTag() {
  const { slug } = useParams();

  const { data: user, isError } = useQuery(
    queryKeys.user(`${slug}`),
    () => usersService.getUserBySlug(`${slug}`),
    { enabled: !!slug },
  );

  const { data: blogs } = useQuery(
    queryKeys.blogsByUser(`${user?._id}`),
    () => blogsService.getBlogsByUser(`${user?._id}`),
    { enabled: !!user },
  );

  if (isError) return <NotFound />;

  return (
    user && (
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-5 bg-gray-900">
          <Image
            alt=""
            src={user.avatar}
            className="aspect-w-16 col-span-2 aspect-h-14"
          />

          <div className="col-span-3 py-4 px-6">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-300 mt-4">{user.bio}</p>
            <div className="flex items-center mt-4 text-gray-300">
              <i className="ri-edit-box-line mr-2 ri-lg"></i>
              {blogs?.total || 0} bài viết
            </div>

            <div className="text-gray-400 mt-4">
              <span>Follow me:</span>
              <div className="flex items-center space-x-2 ml-3">
                {user.facebook && (
                  <Link
                    target="_blank"
                    href={user.facebook}
                    className="transition hover:text-emerald-500 text-lg"
                  >
                    <i className="ri-facebook-circle-fill"></i>
                  </Link>
                )}
                {user.linkedin && (
                  <Link
                    target="_blank"
                    href={user.linkedin}
                    className="transition hover:text-emerald-500 text-lg"
                  >
                    <i className="ri-linkedin-box-fill"></i>
                  </Link>
                )}
                {user.github && (
                  <Link
                    target="_blank"
                    href={user.github}
                    className="transition hover:text-emerald-500 text-lg"
                  >
                    <i className="ri-github-fill"></i>
                  </Link>
                )}
                {user.website && (
                  <Link
                    target="_blank"
                    href={user.website}
                    className="transition hover:text-emerald-500 text-lg"
                  >
                    <i className="ri-earth-fill"></i>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-8">
          {blogs &&
            blogs.data.map((blog, index) => (
              <BlogCardHorizontal key={index} data={blog} />
            ))}
        </div>

        {blogs && blogs.totalPages && (
          <div className="mt-20 grid grid-cols-3">
            <div className="flex justify-start">
              {blogs.hasPrevPage && (
                <Link
                  href={'?page=' + blogs.prevPage}
                  className="flex rounded-sm items-center text-sm bg-emerald-500 py-2 px-6 transition hover:bg-emerald-600"
                >
                  <i className="ri-arrow-left-s-line ri-lg mr-1"></i>Prev
                </Link>
              )}
            </div>
            <div className="flex justify-center text-lg">
              Page {blogs.page} of {blogs.totalPages}
            </div>
            <div className="flex justify-end">
              {blogs.hasNextPage && (
                <Link
                  href={'?page=' + blogs.nextPage}
                  className="flex rounded-sm items-center text-sm bg-emerald-500 py-2 px-6 transition hover:bg-emerald-600"
                >
                  Next <i className="ri-arrow-right-s-line ri-lg ml-1"></i>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    )
  );
}
