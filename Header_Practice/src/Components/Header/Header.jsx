import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="container">
    <div className="header">
        <div className="nav">
            <div className="input">
                <input type="text" placeholder='Write your query!'/>
            </div>
            <div className="other">
                <p className='home'>Home</p>
                <p className='contact'>Contact Us</p>
                <p className='help'>Help</p>
                <button>Login</button>
                <button>Signup</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header