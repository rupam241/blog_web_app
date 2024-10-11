import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='bg-slate-400 w-full fixed bottom-0 '>
        <div className='p-10 flex  items-center justify-around'>
          <div>
            <h1>My Logo</h1>
          </div>
          <div className='flex  flex-col gap-3'>
            <h1 className='mb-4 text-slate-600 text-lg'>Company</h1>
            <div className=''>
              <ul className=''>
                <li><Link>About</Link></li>
                <li><Link>Pricing</Link></li>
                <li>Affilate Programme</li>
                <li>Press Kit</li>
              </ul>
            </div>
          </div>

          <div>

            <div className='flex  flex-col gap-3' >
              <h1 className='mb-4 text-slate-600 text-lg'>Support</h1>
              <div>
                <ul>
                  <li><Link>Account</Link></li>
                  <li><Link>Help</Link></li>
                  <li>Contact Us</li>
                  <li>Customer Support</li>
                </ul>
              </div>
            </div>

          </div>

          <div>
            <div className='flex  flex-col gap-3'>
              <h1 className='mb-4 text-slate-600 text-lg'>Legals</h1>
              <div>
                <ul>
                  <li><Link>Terms & Condition</Link></li>
                  <li><Link>Privacy Policy</Link></li>

                  <li>Licensing</li>
                </ul>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>


  )
}

export default Footer