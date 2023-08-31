import fonts from '@/configs/fonts'
import moment from 'moment'
import type { Metadata } from 'next'
import 'remixicon/fonts/remixicon.css'
import './github-dark.min.css'
import './globals.css'

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
