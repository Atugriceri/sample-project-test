import React from 'react'
import { render, screen } from '@testing-library/react'


import Header from './Header'

describe("The header should be rendered successfully.", () => {
  
  beforeEach(() => {
    render(<Header />)
  })

  test("The header should be in the screen.", () => {
    const header = document.querySelector("component-header")
    expect(header).toBeInTheDocument
  })

  test("The header text should be in the header.", () => {
    const textHeader = screen.getByText(/Emoji Search/i)
    expect(textHeader).toBeInTheDocument()
  })

  test("The header images should be in the header.", () => {
    const imgHeader = screen.getAllByRole("img")
    expect(imgHeader.length).toEqual(2)
  })

})