import Providers from '@/components/providers';
import fonts from '@/configs/fonts';
import moment from 'moment';
import type { Metadata } from 'next';
import 'remixicon/fonts/remixicon.css';
import './globals.css';
import './highlightjs.min.css';

export const metadata: Metadata = {
  title: '404Lab',
  description: 'Blog chia sẻ kĩ thuật lập trình',
};

moment.locale('vi');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${fonts.sans.className} bg-gray-800 text-white`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
