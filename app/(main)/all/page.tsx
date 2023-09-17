'use client';

import blogsService from '@/apiServices/blogs';
import tagsService from '@/apiServices/tags';
import { BlogCardHorizontal } from '@/components/blogCard';
import NotFound from '@/components/notFound';
import queryKeys from '@/configs/queryKeys';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AllBlogs() {
  const [page, setPage] = useState(1);

  const params = useParams();
  const searchParams = useSearchParams();

  useEffect(() => {
    setPage(Number(searchParams.get('page')) || 1);
  }, [searchParams]);

  const { data: blogs } = useQuery(queryKeys.blogs({ page }), () =>
    blogsService.getBlogs({ page }),
  );

  return (
    blogs && (
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center flex-col py-14 bg-gray-900">
          <h1 className="text-3xl font-bold">TẤT CẢ</h1>
          <div className="flex items-center mt-6 mb-4 text-gray-300">
            <i className="ri-edit-box-line mr-2 ri-lg"></i>
            {blogs.total || 0} bài viết
          </div>
          <p className=" text-gray-300">
            Tổng hợp các bài viết chia sẻ kỹ thuật lập trình
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {blogs.data.map((blog, index) => (
            <BlogCardHorizontal data={blog} key={index} />
          ))}
        </div>

        {blogs.totalPages && (
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
