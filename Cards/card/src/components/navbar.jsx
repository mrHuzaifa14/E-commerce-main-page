import React from 'react'
import './App.css'

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="/">E-Commerce</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/store">Store</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pricing">Pricing</a>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="/login">Log In</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signup">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavigationBar

