import React from 'react'

const NavBar = () => {
  return (
    <nav  className='bg-cyan-800'>
      <ul className='flex gap-10 p-5 justify-evenly  items-center'>
        <li>Home</li>
        <li>Services</li>
        <li>Users</li>
        <button className='bg-white text-black p-5'>Login</button>
      </ul>
    </nav>
  )
}

export default NavBar