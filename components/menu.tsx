import { Fragment, MouseEventHandler, ReactElement } from 'react'
import { Menu as BaseMenu, Transition } from '@headlessui/react'
import Link from 'next/link'

interface Item {
	label: string
	href?: string
	onClick?: MouseEventHandler
}

interface Props {
	children?: ReactElement
	items: Item[]
}

export default function Menu({ children, items }: Props) {
	return (
		<BaseMenu as='div' className='relative z-10'>
			<BaseMenu.Button as='div' className='outline-none'>
				{children}
			</BaseMenu.Button>

			<Transition
				enter='transition duration-100 ease-out'
				enterFrom='transform -translate-y-4 opacity-0'
				enterTo='transform translate-y-0 opacity-100'
				leave='transition duration-75 ease-out'
				leaveFrom='transform translate-y-0 opacity-100'
				leaveTo='transform -translate-y-3 opacity-0'
			>
				<BaseMenu.Items className='absolute outline-none top-[calc(100%+.5rem)] flex rounded shadow-xl shadow-gray-500/5 flex-col min-w-[12rem] right-0 bg-gray-900'>
					{items.map(({ label, href, onClick }, index) => {
						const Comp = href ? Link : 'button'

						return (
							<BaseMenu.Item key={index} as={Fragment}>
								<Comp
									href={`${href}`}
									className='px-6 ui-active:text-emerald-500 text-left text-gray-400 whitespace-nowrap text-[0.9375rem] py-4 w-full'
									onClick={onClick}
								>
									{label}
								</Comp>
							</BaseMenu.Item>
						)
					})}
				</BaseMenu.Items>
			</Transition>
		</BaseMenu>
	)
}
