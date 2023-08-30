import Footer from '@/components/footer'
import Header from '@/components/header'

export default function MainLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			<Header />

			<main className='container max-w-6xl pt-12 pb-36'>
				{children}
			</main>

			<Footer />
		</div>
	)
}
