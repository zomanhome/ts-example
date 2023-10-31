import React, { useRef } from 'react';
import './App.css';
import { FocusableInput, FocusableInputRef } from './FocusableInput'

export type Props = {
  initialText: string
}


const App = () => {
  const inputRef = useRef<FocusableInputRef>(null)

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="App">
      <FocusableInput ref={inputRef} initialText="test"/>
      <button onClick={handleClick}>Set focus</button>
    </div>
  )
}

export default App;
