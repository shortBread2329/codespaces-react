
import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
// マークダウンの中に直接書かれた HTML を出力
import rehypeRaw from "rehype-raw";
//  <script> タグを除去
import rehypeSanitize from "rehype-sanitize";
// Table, checkbox も変換される
import remarkGfm from "remark-gfm";

const App = (props) => {
  const [memo, setMemo] = useState("");

  const changeMemo = (e) => setMemo(e.target.value);

  return(
    <div>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {memo}
      </ReactMarkdown>
      <textarea onChange={changeMemo} val={memo}></textarea>
    </div>
  )
}

export default App;
