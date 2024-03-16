import React, { useRef, useEffect } from 'react'

import { EditorState, basicSetup } from '@codemirror/basic-setup'
// import { EditorState } from '@codemirror/state'
import { EditorView, keymap } from '@codemirror/view'
import { defaultKeymap } from '@codemirror/commands'

export const Editor = () => {
  const editor = useRef()

  useEffect(() => {
    const startState = EditorState.create({
      doc: 'Hello World',
      extensions: [keymap.of(defaultKeymap)],
    })

    const view = new EditorView({ state: startState, parent: editor.current })

    return () => {
      view.destroy()
    }
  }, [])

  return <div className="CodeMirror" ref={editor}></div>
}