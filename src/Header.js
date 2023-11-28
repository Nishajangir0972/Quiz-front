import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
<Link to='/form'>Form</Link>

<Link to='/allQuestion'>All Questions</Link>
    </div>
  )
}

export default Header