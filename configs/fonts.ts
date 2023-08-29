import { Nunito, Roboto } from 'next/font/google'

const sans = Roboto({
	subsets: ['latin', 'vietnamese'],
	weight: ['300', '400', '500', '700', '900'],
})
const nunito = Nunito({ subsets: ['latin', 'vietnamese'] })

const fonts = { sans, nunito }

export default fonts
