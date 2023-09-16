import routes from '@/configs/routes';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl bg-gray-900 py-16 flex flex-col items-center px-12">
      <h1 className="text-5xl font-black text-emerald-500">404</h1>
      <h2 className="mt-4">Trang không tìm thấy</h2>

      <Link href={routes.home} className='py-3 px-16 mt-10 bg-emerald-500 transition hover:bg-emerald-600'>Trang chủ</Link>
    </div>
  );
}
