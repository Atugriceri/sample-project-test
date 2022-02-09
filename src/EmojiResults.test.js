import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event"

import App from './App.js'

let emojis, input

describe("Emoji Results Testing", () => {

  beforeEach(() => {
    render(<App />)
    emojis = screen.getAllByText('Click to copy emoji')
    input = screen.getByPlaceholderText('Enter the emoji')
  })

  test("Emoji List should be rendered.", () => {
    expect(emojis.length).toEqual(20)
  })

  test("The filtering process should be created correctly.", () => {
    const emojiName = "Blush"
    userEvent.type(input, emojiName)
    expect(screen.getByText(emojiName)).toBeInTheDocument()
  })

  test("Clicking on emoji should copy emoji.", () => {
    let theClipboard = window.navigator.clipboard
    userEvent.click(emojis[0].parentElement)
    expect(theClipboard).toEqual(emojis[0].value)
  })

})