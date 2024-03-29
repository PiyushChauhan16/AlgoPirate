import RunTest from "./RunAllTest.js"
import DisplayProblem from "./DisplayProblem.js";
import React, { useRef, useEffect, useState } from 'react'
import { EditorState } from '@codemirror/state'
import { EditorView, keymap } from '@codemirror/view'
import { defaultKeymap, indentWithTab } from '@codemirror/commands'
import { cpp } from '@codemirror/lang-cpp'
import Editorial from "./Editorial.js";
import { oneDark } from '@codemirror/theme-one-dark'
import Chatgpt from "./Chatgpt.js";


const TextEditor = ({ques}) => {
    const editor = useRef()
    let [route, setRoute] = useState (0);
    let [code, setCode] = React.useState (()=>{
        if (localStorage.getItem("userCode") === ""){
            console.log ("in if")
            return ques.boilerPlate;
        }
        else
        return localStorage.getItem ("userCode");
    });
    let [input, setInput] = React.useState ("");
    useEffect(() => {
        const startState = EditorState.create({
            doc: code,
            extensions: [
                keymap.of([defaultKeymap], indentWithTab),
                cpp (),
                onUpdate,
                oneDark
            ],
          })
        
        const view = new EditorView({ state: startState, parent: editor.current })
        

        let baseTheme = EditorView.baseTheme({
            ".cm-o-replacement": {
            display: "inline-block",
            width: ".5em",
            height: ".5em",
            borderRadius: ".25em"
            },
            "&light .cm-o-replacement": {
            backgroundColor: "#04c"
            },
            "&dark .cm-o-replacement": {
            backgroundColor: "#5bf"
            }
        })

        return () => {
            view.destroy()
        }
     }, [])

    const onUpdate = EditorView.updateListener.of((v) => {
        localStorage.setItem ("userCode", v.state.doc.toString())

        setCode(v.state.doc.toString())
    })

    const inputHandler = (e) => {
        setInput (e.target.value)
    }

    console.log ("input editor:", input)
    const handleRouting =()=>{
        if (route === 0){
            return <DisplayProblem ques = {ques}></DisplayProblem>
        }
        else if (route === 1){
            return <Editorial></Editorial>
        }
        else if (route == 2){
            return <Chatgpt query={""}></Chatgpt>
        }
    }

    return (
        <>

        <div className="text-editor-arrangment">
                <div className="question">
                    <div>
                        <button
                            onClick={()=>setRoute(0)}
                        >PROBLEM</button>
                        <button
                            onClick={()=>setRoute(1)}
                        >EDITORIAL</button>
                        <button
                            onClick={()=>setRoute(2)}
                        >CHATGPT</button>
                    </div>
                    {handleRouting ()}
                    
                </div>
                <div className="editor">
                    <div className = "CodeMirror" ref={editor}></div>
                    <textarea
                        onChange={(e)=>{inputHandler (e)}}
                        placeholder="Enter input"
                        value={input}
                        className="input"
                        style={{
                            "color":"white"
                        }}
                    
                    ></textarea>
                    
                </div> 
            </div>
            <div className="submission-window">
            <RunTest correctCode={ques.correctCode} code={code} customInput={input} testcases={ques.testcases} expectedRes={ques.output}></RunTest>
            </div>
        </>
        
    )
   
}

export default TextEditor