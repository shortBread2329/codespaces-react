
import React from "react";
import { useState } from "react";

const App = (props) => {
  const [memo, setMemo] = useState("tomato");

  const changeMemo = (e) => setMemo(e.target.value);

  return(
    <div>
      <div>{memo}</div>
      <textarea onChange={changeMemo} val={memo}></textarea>
    </div>
  )
}

export default App;
