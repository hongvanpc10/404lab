'use client';

import blogsService from '@/apiServices/blogs';
import { BlogCardHorizontal } from '@/components/blogCard';
import Image from '@/components/image';
import NotFound from '@/components/notFound';
import TextEditorViewer from '@/components/textEditor/textEditorViewer';
import Textarea from '@/components/textarea';
import Title from '@/components/title';
import queryKeys from '@/configs/queryKeys';
import routes from '@/configs/routes';
import generateToc, { TocItem } from '@/utils/generateToc';
import slugify from '@/utils/slugify';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BlogDetail() {
  const slug = useParams().slug as string;

  const { data, isError } = useQuery(queryKeys.blogDetail(slug), () =>
    blogsService.getBlogDetail(slug),
  );

  const [toc, setToc] = useState<TocItem[]>([]);

  useEffect(() => {
    if (data) {
      document.querySelectorAll('.prose h2, .prose h3').forEach((heading) => {
        if (heading.textContent) {
          heading.id = slugify(heading.textContent);
        }
      });
      setToc(generateToc(data.content));
    }
  }, [data]);

  if (isError) return <NotFound />;

  return (
    data && (
      <div>
        <div className="flex mb-10 items-center text-[0.9375rem] text-gray-400">
          <Link href={routes.home} className="flex items-center">
            <i className="ri-home-4-fill"></i>
          </Link>
          <span className="mx-2.5">/</span>
          <span className="text-emerald-500">{data.title}</span>
        </div>

        <div className="pb-5 border-b border-gray-600">
          <h1 className="text-4xl font-bold">{data.title}</h1>

          <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
            <div className="flex items-center">
              Đăng bởi
              <Link
                href={routes.blogsByAuthor(data.author.slug)}
                className="text-emerald-500 ml-1.5"
              >
                {data.author.name}
              </Link>
              <span className="mx-2.5">|</span>
              {moment(data.createdAt).format('D [thg] M, YYYY')}
            </div>

            <span className="flex items-center">
              <i className="ri-time-line mr-2 ri-lg"></i>
              10 phút đọc
            </span>
          </div>
        </div>

        <div className="flex items-center mt-6 mb-10">
          <span className="text-gray-400 mr-4">Chia sẻ bài viết:</span>
          <div className="flex items-center space-x-3">
            <button className="bg-blue-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-1.5 px-2">
              <i className="ri-facebook-fill"></i>
            </button>
            <button className="bg-purple-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-1.5 px-2">
              <i className="ri-github-fill"></i>
            </button>
            <button className="bg-gray-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-1.5 px-2">
              <i className="ri-linkedin-fill"></i>
            </button>
            <button className="bg-rose-500 rounded-tr-xl rounded-bl-xl hover:brightness-75 transition py-1.5 px-2">
              <i className="ri-file-copy-line"></i>
            </button>
          </div>
        </div>

        <Image alt="" src={data.thumb} className="aspect-w-16 aspect-h-9" />

        <div className="flex mt-16">
          <div className="mr-8 w-9/12">
            <TextEditorViewer content={data.content} />
          </div>

          <div>
            <div className="space-y-16 sticky top-6 max-h-[calc(100vh-2rem)] overflow-y-auto">
              <div>
                <Title className="!text-xl !mb-4">Mục lục</Title>
                <ul className="space-y-2">
                  {toc &&
                    toc.map((item, index) => (
                      <li
                        key={index}
                        className={`text-gray-300 text-[0.9375rem] transition hover:text-emerald-500 ${
                          item.level > 2 && 'ml-3'
                        }`}
                      >
                        <Link href={'#' + slugify(item.value)}>
                          {item.value}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 bg-gray-900">
                <Link href={routes.blogsByAuthor(data.author.slug)}>
                  <Image
                    alt=""
                    src={data.author.avatar}
                    className="aspect-w-14 aspect-h-16"
                  />
                </Link>

                <div className="col-span-2 p-3">
                  <h2 className="text-lg font-bold">
                    <Link href={routes.blogsByAuthor('sdcfdsefe')}>
                      {data.author.name}
                    </Link>
                  </h2>
                  <p className="mt-1 text-[0.9375rem] text-gray-300">
                    {data.author.bio}
                  </p>
                  <div className="text-gray-400 text-sm mt-2">
                    <span>Follow me:</span>
                    <div className="flex items-center text-base space-x-2 ml-3">
                      {data.author.facebook && (
                        <Link
                          href={data.author.facebook}
                          className="transition hover:text-emerald-500"
                        >
                          <i className="ri-facebook-circle-fill"></i>
                        </Link>
                      )}
                      {data.author.linkedin && (
                        <Link
                          href={data.author.linkedin}
                          className="transition hover:text-emerald-500"
                        >
                          <i className="ri-linkedin-box-fill"></i>
                        </Link>
                      )}
                      {data.author.github && (
                        <Link
                          href={data.author.github}
                          className="transition hover:text-emerald-500"
                        >
                          <i className="ri-github-fill"></i>
                        </Link>
                      )}
                      {data.author.website && (
                        <Link
                          href={data.author.website}
                          className="transition hover:text-emerald-500"
                        >
                          <i className="ri-earth-fill"></i>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div />
            </div>
          </div>
        </div>

        <div className="h-0.5 bg-gray-700 mt-14 mb-8" />

        <div className="flex items-center flex-wrap">
          {data.tags.map((tag, index) => (
            <Link
              href={routes.blogsByTag(tag.slug)}
              key={index}
              className="py-1.5 px-4 transition rounded-sm hover:bg-emerald-500 text-[0.9375rem] bg-gray-700 mr-2.5 mb-2"
            >
              #{tag.name}
            </Link>
          ))}
        </div>

        <div className="max-w-3xl mt-16 mx-auto space-y-16">
          <div>
            <Title>Bình luận</Title>

            <form className="flex flex-col items-end">
              <Textarea placeholder="Viết bình luận của bạn tại đây" rows={4} />
              <button className="px-6 rounded-sm py-2 mt-4 mr-4 transition hover:bg-emerald-600 bg-emerald-500">
                Bình luận
              </button>
            </form>
          </div>

          <div>
            <Title>Bài viết liên quan</Title>

            <div className="space-y-8">
              <BlogCardHorizontal />
              <BlogCardHorizontal />
              <BlogCardHorizontal />
              <BlogCardHorizontal />
            </div>
          </div>
        </div>
      </div>
    )
  );
}
