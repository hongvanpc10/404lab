'use client'

import { Editor } from '@tiptap/react'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import py from 'highlight.js/lib/languages/python'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import { lowlight } from 'lowlight'
import { useCallback, useState } from 'react'
import Popover from '../popover'

lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('py', py)
lowlight.registerLanguage('ts', ts)

export default function MenuBar({ editor }: { editor: Editor | null }) {
	const [imageUrl, setImageUrl] = useState('')
	const [url, setUrl] = useState('')
	const [table, setTable] = useState<[number, number]>([3, 3])

	const addImage = useCallback(() => {
		if (!editor || !imageUrl) return

		editor.chain().focus().setImage({ src: imageUrl }).run()
		setImageUrl('')
	}, [editor, imageUrl])

	const setLink = useCallback(() => {
		if (!editor) return

		if (url === null) {
			return
		}

		if (url === '') {
			editor.chain().focus().extendMarkRange('link').unsetLink().run()

			return
		}

		editor
			.chain()
			.focus()
			.extendMarkRange('link')
			.setLink({ href: url })
			.run()
	}, [editor, url])

	if (!editor) return

	return (
		<div className='space-x-2 flex sticky top-0 z-10 bg-gray-900 rounded-t p-2'>
			<button
				type='button'
				onClick={() => editor.chain().focus().toggleBold().run()}
				className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
					editor.isActive('bold')
						? 'text-white bg-emerald-500'
						: 'hover:text-emerald-500'
				}`}
			>
				<i className={`ri-bold ri-lg`}></i>
			</button>
			<button
				type='button'
				onClick={() => editor.chain().focus().toggleItalic().run()}
				className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
					editor.isActive('italic')
						? 'text-white bg-emerald-500'
						: 'hover:text-emerald-500'
				}`}
			>
				<i className={`ri-italic ri-lg`}></i>
			</button>
			<button
				type='button'
				onClick={() => editor.chain().focus().toggleUnderline().run()}
				className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
					editor.isActive('underline')
						? 'text-white bg-emerald-500'
						: 'hover:text-emerald-500'
				}`}
			>
				<i className={`ri-underline ri-lg`}></i>
			</button>{' '}
			<button
				type='button'
				onClick={() => editor.chain().focus().toggleStrike().run()}
				className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
					editor.isActive('strike')
						? 'text-white bg-emerald-500'
						: 'hover:text-emerald-500'
				}`}
			>
				<i className={`ri-strikethrough ri-lg`}></i>
			</button>
			<button
				type='button'
				onClick={() => editor.chain().focus().toggleCode().run()}
				className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
					editor.isActive('code')
						? 'text-white bg-emerald-500'
						: 'hover:text-emerald-500'
				}`}
			>
				<i className={`ri-code-view ri-lg`}></i>
			</button>
			<button
				type='button'
				onClick={() => editor.chain().focus().toggleHighlight().run()}
				className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
					editor.isActive('highlight')
						? 'text-white bg-emerald-500'
						: 'hover:text-emerald-500'
				}`}
			>
				<i className={`ri-mark-pen-line ri-lg`}></i>
			</button>
			<button
				type='button'
				onClick={() =>
					editor.chain().focus().toggleHeading({ level: 2 }).run()
				}
				className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
					editor.isActive('heading', { level: 2 })
						? 'text-white bg-emerald-500'
						: 'hover:text-emerald-500'
				}`}
			>
				<i className={`ri-h-2 ri-lg`}></i>
			</button>
			<button
				type='button'
				onClick={() =>
					editor.chain().focus().toggleHeading({ level: 3 }).run()
				}
				className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
					editor.isActive('heading', { level: 3 })
						? 'text-white bg-emerald-500'
						: 'hover:text-emerald-500'
				}`}
			>
				<i className={`ri-h-3 ri-lg`}></i>
			</button>
			<button
				type='button'
				onClick={() =>
					editor.chain().focus().toggleHeading({ level: 4 }).run()
				}
				className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
					editor.isActive('heading', { level: 4 })
						? 'text-white bg-emerald-500'
						: 'hover:text-emerald-500'
				}`}
			>
				<i className={`ri-h-4 ri-lg`}></i>
			</button>
			<button
				type='button'
				onClick={() => editor.chain().focus().setParagraph().run()}
				className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
					editor.isActive('paragraph')
						? 'text-white bg-emerald-500'
						: 'hover:text-emerald-500'
				}`}
			>
				<i className={`ri-paragraph ri-lg`}></i>
			</button>
			<button
				type='button'
				onClick={() => editor.chain().focus().toggleBulletList().run()}
				className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
					editor.isActive('bulletList')
						? 'text-white bg-emerald-500'
						: 'hover:text-emerald-500'
				}`}
			>
				<i className={`ri-list-unordered ri-lg`}></i>
			</button>
			<button
				type='button'
				onClick={() => editor.chain().focus().toggleOrderedList().run()}
				className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
					editor.isActive('orderedList')
						? 'text-white bg-emerald-500'
						: 'hover:text-emerald-500'
				}`}
			>
				<i className={`ri-list-ordered ri-lg`}></i>
			</button>
			<button
				type='button'
				onClick={() => editor.chain().focus().toggleCodeBlock().run()}
				className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
					editor.isActive('codeBlock')
						? 'text-white bg-emerald-500'
						: 'hover:text-emerald-500'
				}`}
			>
				<i className={`ri-code-box-line ri-lg`}></i>
			</button>
			<button
				type='button'
				onClick={() => editor.chain().focus().toggleBlockquote().run()}
				className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
					editor.isActive('blockquote')
						? 'text-white bg-emerald-500'
						: 'hover:text-emerald-500'
				}`}
			>
				<i className={`ri-double-quotes-l ri-lg`}></i>
			</button>
			<button
				type='button'
				onClick={() => editor.chain().focus().setHardBreak().run()}
				className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
					editor.isActive('harkBreak')
						? 'text-white bg-emerald-500'
						: 'hover:text-emerald-500'
				}`}
			>
				<i className={`ri-text-wrap ri-lg`}></i>
			</button>
			<Popover
				render={() => (
					<div className='p-1 flex items-center'>
						<input
							placeholder='Nhập url hình ảnh'
							autoFocus
							className='bg-transparent px-4 w-64 outline-none text-sm'
							value={imageUrl}
							onChange={e => setImageUrl(e.target.value)}
						/>
						<button
							type='button'
							className='text-sm text-emerald-500 py-1.5 px-4'
							onClick={addImage}
						>
							Tải
						</button>
					</div>
				)}
			>
				<button
					type='button'
					className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
						editor.isActive('image')
							? 'text-white bg-emerald-500'
							: 'hover:text-emerald-500'
					}`}
				>
					<i className={`ri-image-add-line ri-lg`}></i>
				</button>
			</Popover>
			<Popover
				render={() => (
					<div className='p-1 flex items-center'>
						<input
							placeholder='Nhập url'
							autoFocus
							className='bg-transparent px-4 w-64 outline-none text-sm'
							value={url}
							onChange={e => setUrl(e.target.value)}
						/>
						<button
							type='button'
							className='text-sm text-emerald-500 py-1.5 px-4'
							onClick={setLink}
						>
							Gắn
						</button>
					</div>
				)}
			>
				<button
					type='button'
					className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
						editor.isActive('link')
							? 'text-white bg-emerald-500'
							: 'hover:text-emerald-500'
					}`}
				>
					<i className={`ri-link ri-lg`}></i>
				</button>
			</Popover>
			<Popover
				render={() => (
					<div className='p-1 flex items-center'>
						<input
							placeholder='Nhập số cột'
							autoFocus
							className='bg-transparent px-4 w-14 text-center outline-none text-sm'
							value={table[0]}
							onChange={e =>
								setTable(prev => [
									Number(e.target.value),
									prev[1],
								])
							}
						/>
						<i className='mx-2 ri-close-line text-gray-400'></i>
						<input
							placeholder='Nhập số dòng'
							className='bg-transparent px-4 w-14 text-center outline-none text-sm'
							value={table[1]}
							onChange={e =>
								setTable(prev => [
									prev[0],
									Number(e.target.value),
								])
							}
						/>
						<button
							type='button'
							className='text-sm text-emerald-500 py-1.5 px-4'
							onClick={() =>
								editor.commands.insertTable({
									rows: table[1],
									cols: table[0],
									withHeaderRow: true,
								})
							}
						>
							Tạo
						</button>
					</div>
				)}
			>
				<button
					type='button'
					onClick={() => editor.chain().focus().redo().run()}
					className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
						editor.isActive('table')
							? 'text-white bg-emerald-500'
							: 'hover:text-emerald-500'
					}`}
				>
					<i className={`ri-table-line ri-lg`}></i>
				</button>
			</Popover>
			<button
				type='button'
				onClick={() => editor.chain().focus().setHorizontalRule().run()}
				className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
					editor.isActive('horizontalRule')
						? 'text-white bg-emerald-500'
						: 'hover:text-emerald-500'
				}`}
			>
				<i className={`ri-separator ri-lg`}></i>
			</button>
			<button
				type='button'
				onClick={() =>
					editor.chain().focus().clearNodes().unsetAllMarks().run()
				}
				className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
					editor.isActive('clearMarks')
						? 'text-white bg-emerald-500'
						: 'hover:text-emerald-500'
				}`}
			>
				<i className={`ri-format-clear ri-lg`}></i>
			</button>
			<button
				type='button'
				onClick={() => editor.chain().focus().undo().run()}
				className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
					editor.isActive('undo')
						? 'text-white bg-emerald-500'
						: 'hover:text-emerald-500'
				}`}
			>
				<i className={`ri-arrow-go-back-line ri-lg`}></i>
			</button>
			<button
				type='button'
				onClick={() => editor.chain().focus().redo().run()}
				className={`flex items-center transition justify-center w-7 h-7 rounded text-gray-400 ${
					editor.isActive('redo')
						? 'text-white bg-emerald-500'
						: 'hover:text-emerald-500'
				}`}
			>
				<i className={`ri-arrow-go-forward-line ri-lg`}></i>
			</button>
		</div>
	)
}
