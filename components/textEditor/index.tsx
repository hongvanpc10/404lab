'use client'

import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { lowlight } from 'lowlight'
import MenuBar from './menuBar'

export default function TextEditor() {
	const editor = useEditor({
		extensions: [
			StarterKit.configure({ codeBlock: false }),
			Highlight,
			CodeBlockLowlight.configure({ lowlight }),
			Image,
			Link.configure({ openOnClick: false }),
			Table,
			TableCell,
			TableHeader,
			TableRow,
			Underline,
		],
		editorProps: {
			attributes: {
				class: 'prose prose-emerald bg-gray-900/50 outline-none p-5 min-h-[25rem] max-w-none',
			},
		},
		content: '<p>Nhập nội dung của bạn tại đây.</p>',
		onUpdate: ({ editor }) => {
			console.log(editor.getHTML())
		},
	})

	return (
		<>
			<MenuBar editor={editor} />
			<EditorContent editor={editor} />
		</>
	)
}
