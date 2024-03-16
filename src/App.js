import React from "react";
import TextEditor from "./components/TextEditor.js";
import "./App.css"
import useGetProblemStat from "./util/useGetProblemStat.js";
function App() {
  const ques = useGetProblemStat (101);
  
  return (
    <div className="App">
      <TextEditor ques = {ques}></TextEditor>
    </div>
  );
}

export default App;
