import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
      <div>
          <div className=' flex justify-between items-center py-3 px-3 md:px-6 bg-gray-100'>
              <Link to={"/"}>
                  <img src="./images/logo2.png" alt="logo" className='w-14' />
              </Link>
              <nav>
                  <ul className='hidden md:flex'>
                     <li className='pl-3 text-middleBlueGreen'><a href="/"> Sign Up</a></li>
                    <Link to={"/Login"}> <li className='pl-3 text-middleBlueGreen'>Log In</li></Link> 
                  </ul>
              </nav>

          </div>
          
          
    </div>
  )
}
