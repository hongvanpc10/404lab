import NextImage from 'next/image'

interface Props {
	src: string
	alt: string
	className?: string
}

export default function Image({ alt, src, className }: Props) {
	return (
		<div className={`${className} relative overflow-hidden`}>
			<NextImage src={src} alt={alt} className={`object-cover`} fill />
		</div>
	)
}
