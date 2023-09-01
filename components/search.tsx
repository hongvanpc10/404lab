export default function Search() {
	return (
		<div className='bg-gray-900 flex items-center pl-14 pr-8 [clip-path:polygon(0_0,calc(100%-1.5rem)_0,100%_100%,1.5rem_100%)]'>
			<input
				className='bg-transparent outline-none py-2.5 w-80'
				placeholder='Tìm bài viết'
			/>
			<button className='p-1'>
				<i className='ri-search-line ri-lg text-emerald-500' />
			</button>
		</div>
	)
}
