'use client'

import routes from '@/configs/routes';
import Link from 'next/link';
import Logo from './logo';
import { useQuery } from '@tanstack/react-query';
import queryKeys from '@/configs/queryKeys';
import tagsService from '@/apiServices/tags';

export default function Footer() {
  const { data: tags } = useQuery(queryKeys.tags, tagsService.getAllTags);

  return (
    <footer>
      <div className="bg-gray-900 py-10">
        <div className="container max-w-6xl gap-8 grid grid-cols-3">
          <Logo />

          <section>
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-medium">Liên kết</h2>
              <div className="h-[1px] ml-4 flex-1 bg-emerald-500" />
            </div>

            <div className="space-y-4 text-gray-400 text-[0.9375rem]">
              <Link
                href={routes.forum}
                className="flex items-center transition hover:text-emerald-500"
              >
                <i className="ri-honor-of-kings-fill ri-lg mr-3" />
                Forum
              </Link>
              <Link
                href={''}
                className="flex items-center transition hover:text-emerald-500"
              >
                <i className="ri-facebook-box-fill ri-lg mr-3" />
                Facebook
              </Link>
              <Link
                href={''}
                className="flex items-center transition hover:text-emerald-500"
              >
                <i className="ri-linkedin-box-fill ri-lg mr-3" />
                Linkedin
              </Link>{' '}
              <Link
                href={''}
                className="flex items-center transition hover:text-emerald-500"
              >
                <i className="ri-github-fill ri-lg mr-3" />
                Github
              </Link>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-medium">Tags</h2>
              <div className="h-[1px] ml-4 flex-1 bg-emerald-500" />
            </div>

            {tags && (
              <div className="flex items-center flex-wrap">
                {tags.map((tag, index) => (
                  <Link
                    key={index}
                    href={routes.blogsByTag(tag.slug)}
                    className="py-1.5 px-3 transition hover:bg-emerald-500 hover:text-white text-sm bg-gray-800 text-gray-400 rounded-sm mr-2 mb-2"
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>

      <div className="flex items-center bg-gray-900/60 justify-center h-16">
        © Copyright 2023 <span className="mx-2">-</span>
        <Link href={routes.home} className="text-emerald-500">
          404Lab
        </Link>
      </div>
    </footer>
  );
}
