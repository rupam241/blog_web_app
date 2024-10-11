import React from 'react'
import { Link ,NavLink} from 'react-router-dom'

function Header() {
  return (
   <>
   <div className='bg-slate-500 w-full h-1/4 p-6 flex items-center justify-between '>
    <div className='text-2xl'>
     <Link to="/">My logo</Link>
    </div>

    <div className='flex gap-12 text-2xl'>
    <NavLink to="">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
 
    </div>
   </div>
   </>
  )
}

export default Header