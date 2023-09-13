'use client';

import Logo from '@/components/logo';
import routes from '@/configs/routes';
import moment from 'moment';
import 'moment/locale/vi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from './image';
import Menu from './menu';
import Search from './search';
import useAuth from '@/hooks/useAuth';
import { useMutation } from '@tanstack/react-query';
import authService from '@/apiServices/auth';

export default function Header() {
  const pathname = usePathname();
  const { user, setAuth } = useAuth();

  const { mutate: signOut } = useMutation(authService.signOut, {
    onSuccess() {
      localStorage.removeItem('isSignIn');
    },
  });

  return (
    <header>
      <div className="border-b border-emerald-500">
        <div className="container max-w-6xl text-sm flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center space-x-3 text-gray-600">
              <i className="hover:text-emerald-500 ri-facebook-fill ri-lg transition" />
              <i className="hover:text-emerald-500 ri-linkedin-fill ri-lg transition" />
              <i className="hover:text-emerald-500 ri-github-fill ri-lg transition" />
            </div>

            <div className="bg-emerald-500 ml-3 [clip-path:polygon(0_0,calc(100%-1.5rem)_0,100%_100%,1.5rem_100%)] py-3.5 px-8">
              {moment()
                .format('dddd, D [tháng] M, YYYY')
                .split('')
                .map((c, i) => (i === 0 ? c.toUpperCase() : c))
                .join('')}
            </div>
          </div>

          <nav className="flex text-gray-400 items-center space-x-7">
            <Link
              href={routes.forum}
              className="transition hover:text-emerald-500"
            >
              Forum
            </Link>
            {!user && (
              <>
                <Link
                  href={routes.login}
                  className="transition hover:text-emerald-500"
                >
                  Đăng nhập
                </Link>
                <Link
                  href={routes.signup}
                  className="transition hover:text-emerald-500"
                >
                  Đăng kí
                </Link>
              </>
            )}

            {user && (
              <Menu
                items={[
                  {
                    label: 'Tài khoản của tôi',
                    href: routes.account,
                  },
                  { label: 'Bài viết của tôi' },
                  {
                    label: 'Đăng xuất',
                    onClick: () => {
                      signOut();
                      setAuth(null);
                    },
                  },
                ]}
              >
                <button className="flex items-center">
                  <Image
                    alt=""
                    src={user.avatar}
                    className="h-5 w-5 rounded-full mr-2"
                  />
                  <h2 className="text-emerald-500 text-[0.9375rem]">
                    {user.name}
                  </h2>
                </button>
              </Menu>
            )}
          </nav>
        </div>
      </div>

      <div className="container max-w-6xl flex items-center justify-between py-6 lg:flex-row flex-col">
        <Logo />

        <div className="lg:mt-0 mt-8">
          <div className="flex items-center">
            <Search />

            <button className="ml-7">
              <i className="ri-sun-line ri-xl"></i>
            </button>

            {user && (
              <Link
                href={routes.newBlog}
                className="text-white ml-7 bg-emerald-500 w-9 h-9 transition hover:bg-emerald-600 flex items-center justify-center rounded-full"
              >
                <i className="ri-edit-box-line ri-lg"></i>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="bg-gray-900">
        <div className="container max-w-6xl">
          <nav className="flex items-center">
            <Link
              href={routes.home}
              className={`pb-4 pt-5 px-2 mr-4 hover:text-emerald-500 inline-block border-b-4 border-transparent transition ${
                pathname === '/' && 'text-emerald-500 !border-emerald-500'
              }`}
            >
              HOME
            </Link>
            <div className="flex no-scrollbar whitespace-nowrap overflow-x-auto overflow-y-hidden space-x-3 items-center text-gray-400">
              {[
                { name: 'Chung', href: '/tag/all' },
                { name: 'javascript', href: '/tag/javascript' },
                { name: 'python', href: '/tag/python' },
                { name: 'data', href: '/tag/data' },
                { name: 'devops', href: '/tag/devops' },
                { name: 'frontend', href: '/tag/frontend' },
                { name: 'backend', href: '/tag/backend' },
                { name: 'flutter', href: '/tag/flutter' },
                { name: 'tài liệu', href: '/tag/resources' },
                {
                  name: 'tips & tricks',
                  href: '/tag/tips-and-tricks',
                },
                { name: 'news', href: '/tag/news' },
                { name: 'windows', href: '/tag/windows' },
                { name: 'macos', href: '/tag/macos' },
                { name: 'phần mềm', href: '/tag/softwares' },
              ].map(({ name, href }, index) => {
                const isActive = pathname === href;

                return (
                  <Link
                    key={index}
                    href={href}
                    className={`pb-4 pt-5 px-2 hover:text-emerald-500 inline-block border-b-4 border-transparent transition ${
                      isActive && 'text-emerald-500 !border-emerald-500'
                    }`}
                  >
                    {name.toUpperCase()}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
