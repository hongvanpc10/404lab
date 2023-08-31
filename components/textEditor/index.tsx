'use client'

import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import py from 'highlight.js/lib/languages/python'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import { lowlight } from 'lowlight'
import MenuBar from './menuBar'
import Underline from '@tiptap/extension-underline'

lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('py', py)
lowlight.registerLanguage('ts', ts)

export default function TextEditor() {
	const editor = useEditor({
		extensions: [
			StarterKit,
			Highlight,
			CodeBlockLowlight.configure({ lowlight }),
			Image,
			Link.configure({ openOnClick: false }),
			Table,
			TableCell,
			TableHeader,
			TableRow,Underline
		],
		editorProps: {
			attributes: {
				class: 'prose prose-emerald bg-gray-900/50 outline-none p-5 rounded-b min-h-[25rem] max-w-none',
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
