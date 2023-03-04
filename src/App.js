
import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';

const App = (props) => {
  const [memo, setMemo] = useState("");

  const changeMemo = (e) => setMemo(e.target.value);

  return(
    <div>
      <ReactMarkdown className="markdown-body" children={memo} />
      <textarea onChange={changeMemo} val={memo}></textarea>
    </div>
  )
}

export default App;
