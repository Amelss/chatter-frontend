import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
      
<div className='py-10 bg-gray-100'>
      <div className='grid grid-cols-1 bg-white pb-10 rounded-lg items-center md:grid-cols-2 mx-3 md:mx-40 md:pb-0 '>
       
    <img src="./images/group2.png" alt="group of girls" className='w-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none' />
          <form action="/Signup" method='post' className='px-4 mt-10 md:mt-20 mx-auto'>
            <h1 className='text-5xl font-bold tracking-wide py-3 md:text-7xl'>Chatting now</h1>
            <h3 className='text-2xl font-bold tracking-wide pb-8 md:text-3xl'>Join Chatter today.</h3>
              <input type="text" name='firstName' placeholder='First Name' className='signup' />
              <br />
              <input type="text" name='lastName' placeholder='Last Name' className='signup' />
              <br />
              <input type="email" name='email' placeholder='Email' className='signup' />
              <br />
              <input type="text" name='username' placeholder='Username' className='signup' />
              <br />
              <input type="password" name='password' placeholder='Create Password' className='signup' />
              <br />
            <input type="password" name='confirmPassword' placeholder='Confirm Password' className='signup' />
            <br />
            <button className='bg-middleBlueGreen rounded-md w-full md:w-full py-2 mt-10 text-white font-medium text-xl' >Sign Up</button>
            <p className='text-center text-sm py-2'>Already have an account? <Link to={"/Login"}><span className='font-medium text-middleBlueGreen'>Login here.</span></Link> </p>



          </form>
          
    </div>
</div>      

  )
}

