import { SearchNormal1 } from 'iconsax-react'

export default function Search() {
	return (
		<div className='bg-gray-900 flex items-center pl-14 pr-8 [clip-path:polygon(0_0,96%_0,100%_100%,4%_100%)]'>
			<input
				className='bg-transparent outline-none py-2.5 w-80'
				placeholder='Tìm bài viết'
			/>
			<button className='p-1'>
				<SearchNormal1 size='1.25em' className='text-emerald-500' />
			</button>
		</div>
	)
}
