import { concatenation } from './concatenation'

const button: HTMLButtonElement | null = document.querySelector('button')
const input: HTMLInputElement | null = document.querySelector('input')

if (button && input) {
  button.disabled = true

  input.addEventListener('focusin', () => {
    button.disabled = input.value === ''
  })

  input.addEventListener('focusout', () => {
    button.disabled = input.value === ''
  })

  input.addEventListener('keypress', () => {
    button.disabled = false
  })

  button.addEventListener('click', () => {
    if (!button.disabled) {
      concatenation(input.value, 'second argument')
    }
  })
}
