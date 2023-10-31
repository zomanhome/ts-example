import React, { ForwardedRef, forwardRef, useImperativeHandle, useRef } from 'react'
import { Props } from './App'

export type FocusableInputRef = {
  focus: () => void
}

function FocusableInput({ initialText }: Props, ref: ForwardedRef<FocusableInputRef>) {
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    },
  }))

  return <input defaultValue={initialText} ref={inputRef}/>
}

const refForwarded = forwardRef<FocusableInputRef, Props>(FocusableInput)

export { refForwarded as FocusableInput }
