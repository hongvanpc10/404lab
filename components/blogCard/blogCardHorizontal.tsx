import moment from 'moment';
import Link from 'next/link';
import Image from '../image';
import routes from '@/configs/routes';
import { Blog } from '@/apiServices/blogs/interfaces';

export default function BlogCardHorizontal({ data }: { data: Blog }) {
  return (
    <div className="grid grid-cols-5 bg-gray-900 p-4 gap-4">
      <div className="col-span-3">
        <h3 className="mb-2 text-lg font-medium transition hover:text-emerald-500">
          <Link href={routes.blogDetail(data.slug)} className="line-clamp-2">
            {data.title}
          </Link>
        </h3>

        <p className="text-[0.9375rem] text-gray-300 line-clamp-2">
          {data.description}
        </p>

        <div className="flex items-center mt-4">
          <Link href={routes.blogsByAuthor(data.author.slug)}>
            <Image
              alt=""
              src={data.author.avatar}
              className="w-9 h-9 rounded-full"
            />
          </Link>

          <div className="ml-3">
            <h3 className="text-emerald-500">
              <Link href={routes.blogsByAuthor(data.author.slug)}>
                {data.author.name}
              </Link>
            </h3>
            <div className="flex items-center mb-2 text-xs text-gray-400">
              {moment(data.createdAt).format('D [Thg] M, YYYY')}
              <div className="w-1 h-1 rounded-full bg-current mx-2" />
              10 phút đọc
            </div>
          </div>
        </div>
      </div>

      <Link href={routes.blogDetail(data.slug)} className="col-span-2">
        <Image alt="" src={data.thumb} className="aspect-w-16 aspect-h-10" />
      </Link>
    </div>
  );
}
