import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div>
      <div>
        <div>
          <h1>My Logo</h1>
        </div>
        <div>
          <h1>Company</h1>
          <div>
            <ul>
              <li><Link>About</Link></li>
              <li><Link>Pricing</Link></li>
              <li></li>
              <li>Affilate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
     </>

    
  )
}

export default Footer