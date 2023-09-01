'use client'

import { EditorContent, useEditor } from '@tiptap/react'

import { extensions } from '.'

export default function TextEditorViewer({ content }: { content: string }) {
	const editor = useEditor({
		extensions,
		editorProps: {
			attributes: {
				class: 'prose prose-lg prose-emerald outline-none max-w-none',
			},
		},
		content,
		editable: false,
	})

	return <EditorContent editor={editor} />
}
