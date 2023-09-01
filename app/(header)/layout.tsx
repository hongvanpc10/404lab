import Header from '@/components/header'

export default function HeaderOnlyLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			<Header />

			<main className='container max-w-6xl pt-12 pb-36'>{children}</main>
		</div>
	)
}
