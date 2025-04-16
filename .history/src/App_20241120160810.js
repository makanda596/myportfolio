import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const App = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <CopyToClipboard text={input}>
        <button>COPY</button>
      </CopyToClipboard>
    </div>
  )
}

export default App
