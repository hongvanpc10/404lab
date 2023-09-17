import { Blog } from '@/apiServices/blogs/interfaces';
import Image from '../image';
import moment from 'moment';
import Link from 'next/link';
import routes from '@/configs/routes';

interface Props {
  className?: string;
  data: Blog;
}

export default function FeaturedBlogCard({ className, data }: Props) {
  return (
    <div className={`relative h-full ${className}`}>
      <Image
        alt=""
        src={data.thumb}
        className="aspect-w-16 h-full aspect-h-11"
      />
      <Link href={routes.blogDetail(data.slug)}>
        <div className="bg-gradient-to-t from-black/80 to-transparent absolute inset-0" />
      </Link>
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="flex items-center mb-1.5 text-sm text-gray-300">
          <i className="ri-calendar-check-line ri-lg mr-2"></i>
          {moment(data.createdAt).format('D [Thg] M, YYYY')}
          <div className="w-1 h-1 rounded-full bg-current mx-2" />
          10 phút đọc
        </div>
        <h3 className="text-2xl font-medium transition hover:text-emerald-500">
          <Link href={routes.blogDetail(data.slug)}>{data.title}</Link>
        </h3>
      </div>
    </div>
  );
}
