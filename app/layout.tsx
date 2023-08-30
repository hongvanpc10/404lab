import fonts from '@/configs/fonts'
import type { Metadata } from 'next'
import './globals.css'
import moment from 'moment'

export const metadata: Metadata = {
	title: '404Lab',
	description: 'Blog chia sẻ kĩ thuật lập trình',
}

moment.locale('vi')

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='vi'>
			<body className={`${fonts.sans.className} bg-gray-800 text-white`}>
				{children}
			</body>
		</html>
	)
}
