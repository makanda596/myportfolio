import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const App = () => {
  const [input, setInput] = useState("");
  return (
    <div>

      <CopyToClipboard text={input}>
        <button><input type="text" placeholder='write something' value={input} onChange={(e) => { setInput(e.target.value) }} />COPY</button>
      </CopyToClipboard>
    </div>
  )
}

export default App
