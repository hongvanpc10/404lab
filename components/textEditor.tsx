'use client'

import Highlight from '@tiptap/extension-highlight'
import {
	ChainedCommands,
	Editor,
	EditorContent,
	useEditor,
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

interface MenuItem {
	type: string
	method: ChainedCommands
	icon: string
	level?: number
}

function MenuBar({ editor }: { editor: Editor | null }) {
	if (!editor) return null

	const menuItems: MenuItem[] = [
		{
			type: 'bold',
			method: editor.chain().focus().toggleBold(),
			icon: 'ri-bold',
		},
		{
			type: 'italic',
			method: editor.chain().focus().toggleItalic(),
			icon: 'ri-italic',
		},
		{
			type: 'strike',
			method: editor.chain().focus().toggleStrike(),
			icon: 'ri-strikethrough',
		},
		{
			type: 'code',
			method: editor.chain().focus().toggleCode(),
			icon: 'ri-code-view',
		},
		{
			type: 'highlight',
			method: editor.chain().focus().toggleHighlight(),
			icon: 'ri-mark-pen-line',
		},
		{
			type: 'heading',
			method: editor.chain().focus().toggleHeading({ level: 2 }),
			icon: 'ri-h-2',
			level: 2,
		},
		{
			type: 'heading',
			method: editor.chain().focus().toggleHeading({ level: 3 }),
			icon: 'ri-h-3',
			level: 3,
		},
		{
			type: 'heading',
			method: editor.chain().focus().toggleHeading({ level: 4 }),
			icon: 'ri-h-4',
			level: 4,
		},
		{
			type: 'paragraph',
			method: editor.chain().focus().setParagraph(),
			icon: 'ri-paragraph',
		},
		{
			type: 'bulletList',
			method: editor.chain().focus().toggleBulletList(),
			icon: 'ri-list-unordered',
		},
		{
			type: 'orderedList',
			method: editor.chain().focus().toggleOrderedList(),
			icon: 'ri-list-ordered',
		},
		{
			type: 'codeBlock',
			method: editor.chain().focus().toggleCodeBlock(),
			icon: 'ri-code-box-line',
		},
		{
			type: 'blockquote',
			method: editor.chain().focus().toggleBlockquote(),
			icon: 'ri-double-quotes-l',
		},
		{
			type: 'horizontalRule',
			method: editor.chain().focus().setHorizontalRule(),
			icon: 'ri-separator',
		},
		{
			type: 'clearMarks',
			method: editor.chain().focus().unsetAllMarks(),
			icon: 'ri-format-clear',
		},
		{
			type: 'undo',
			method: editor.chain().focus().undo(),
			icon: 'ri-arrow-go-back-line',
		},
		{
			type: 'redo',
			method: editor.chain().focus().redo(),
			icon: 'ri-arrow-go-forward-line',
		},
	]

	return (
		<div className='space-x-2 flex sticky top-0 z-10 bg-gray-900 rounded-t p-2'>
			{menuItems.map(({ icon, method, type, level }, index) => {
				return (
					<button
						key={index}
						type='button'
						onClick={() => method.run()}
						className={`flex items-center justify-center w-7 h-7 rounded text-gray-400 ${
							editor.isActive(type, { level }) &&
							'text-white bg-emerald-500'
						}`}
					>
						<i className={`${icon} ri-lg`}></i>
					</button>
				)
			})}
		</div>
	)
}

export default function TextEditor() {
	const editor = useEditor({
		extensions: [StarterKit, Highlight],
		editorProps: {
			attributes: {
				class: 'prose prose-emerald bg-gray-900/50 outline-none p-5 rounded-b min-h-[20rem] max-w-none',
			},
		},
	})

	return (
		<>
			<MenuBar editor={editor} />
			<EditorContent editor={editor} />
		</>
	)
}
