import React from 'react'
import ThemeToggler from './ThemeToggler'

const Header = () => {
  return (
    <nav style={{
      backgroundColor: '#664E88',
      height: '100px',
      color: "#FFFFFF"
    }}>
      <header style={{marginLeft: "100px"}}>
        <h1>theme Toggler</h1>
        <ThemeToggler />
      </header>
    </nav>  
  )
}

export default Header
