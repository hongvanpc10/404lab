import { BlogCardHorizontal } from '@/components/blogCard';
import Image from '@/components/image';
import routes from '@/configs/routes';
import Link from 'next/link';

export default function BlogsByTag() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid grid-cols-5 bg-gray-900">
        <Image
          alt=""
          src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww&w=1000&q=80"
          className="aspect-w-16 col-span-2 aspect-h-14"
        />

        <div className="col-span-3 py-4 px-6">
          <h2 className="text-2xl font-bold">Hong Van</h2>
          <p className="text-gray-300 mt-4">make impossible to possible</p>
          <div className="flex items-center mt-4 text-gray-300">
            <i className="ri-edit-box-line mr-2 ri-lg"></i>
            15 bài viết
          </div>

          <div className="text-gray-400 mt-4">
            <span>Follow me:</span>
            <div className="flex items-center space-x-2 ml-3">
              <Link
                href={''}
                className="transition hover:text-emerald-500 text-lg"
              >
                <i className="ri-facebook-circle-fill"></i>
              </Link>
              <Link
                href={''}
                className="transition hover:text-emerald-500 text-lg"
              >
                <i className="ri-linkedin-box-fill"></i>
              </Link>
              <Link
                href={''}
                className="transition hover:text-emerald-500 text-lg"
              >
                <i className="ri-github-fill"></i>
              </Link>
              <Link
                href={''}
                className="transition hover:text-emerald-500 text-lg"
              >
                <i className="ri-earth-fill"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-8">
        {/* <BlogCardHorizontal />
        <BlogCardHorizontal />
        <BlogCardHorizontal />
        <BlogCardHorizontal />
        <BlogCardHorizontal />
        <BlogCardHorizontal /> */}
      </div>

      <div className="mt-20 grid grid-cols-3">
        <div></div>
        <div className="flex justify-center text-lg">Page 1 of 3</div>
        <div className="flex justify-end">
          <Link
            href={''}
            className="flex rounded-sm items-center text-sm bg-emerald-500 py-2 px-6 transition hover:bg-emerald-600"
          >
            Next <i className="ri-arrow-right-s-line ri-lg ml-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
