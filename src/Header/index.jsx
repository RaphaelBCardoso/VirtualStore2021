import React from 'react'
import logo from '../logo.png'

import './header.css'

export default function Header() {
  return (
    <header>
      <a href="/"><img src={logo} alt="Logo do site"/></a>
      <h1>Loja Virtual 2021</h1>
    </header>
  )
}