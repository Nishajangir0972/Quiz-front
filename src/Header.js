import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='main'>
<Link to='/form'>Form</Link>

<Link to='/allQuestion'>All Questions</Link>
    </div>
  )
}

export default Header