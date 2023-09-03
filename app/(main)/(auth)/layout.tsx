'use client'

import { RECAPTCHA_KEY } from '@/configs/environment'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

export default function MainLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_KEY} language='vi'>
			{children}
		</GoogleReCaptchaProvider>
	)
}
