'use client'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

export default function MainLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<GoogleReCaptchaProvider
			reCaptchaKey='6Ld9UOonAAAAACT5CcVofLXY-S7NgGcZmOXDDv6y'
			language='vi'
		>
			{children}
		</GoogleReCaptchaProvider>
	)
}
