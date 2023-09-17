import moment from 'moment';
import Link from 'next/link';
import Image from '../image';
import { Blog } from '@/apiServices/blogs/interfaces';
import routes from '@/configs/routes';

export default function BlogCard({ data }: { data: Blog }) {
  return (
    <div>
      <Link href={routes.blogDetail(data.slug)}>
        <Image
          alt={data.title}
          src={data.thumb}
          className="aspect-w-16 aspect-h-10"
        />
      </Link>
      <h3 className="mt-2 mb-1.5 text-lg h-14 font-medium transition hover:text-emerald-500">
        <Link href={routes.blogDetail(data.slug)} className="line-clamp-2">
          {data.title}
        </Link>
      </h3>
      <div className="flex items-center mb-2 text-sm text-gray-300">
        <i className="ri-calendar-check-line ri-lg mr-2"></i>
        {moment(data.createdAt).format('D [Thg] M, YYYY')}
        <div className="w-1 h-1 rounded-full bg-current mx-2" />
        10 phút đọc
      </div>
    </div>
  );
}
