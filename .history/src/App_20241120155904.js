import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const App = () => {
  const [input, setInput] = useState("ddd");
  return (
    <div>
      <input type="text" placeholder='write something' value={input} onChange={(e) => { setInput(e.target.value) }} />
      <CopyToClipboard text={input}>
        <button>COPY</button>
      </CopyToClipboard>
    </div>
  )
}

export default App
