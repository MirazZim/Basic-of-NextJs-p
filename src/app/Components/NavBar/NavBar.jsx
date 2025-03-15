"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavBar = () => {
  const  pathName  = usePathname();
  console.log(pathName, pathName.includes("dashboard"));
  if(!pathName.includes("dashboard")) {
    return (
      <nav  className='bg-cyan-800'>
        <ul className='flex gap-10 p-5 justify-evenly  items-center'>
          <Link href="/">Home</Link>
          <Link href="/Services">Players</Link>
          <Link href="/About">About</Link>
          <Link href="/Login">Login</Link>
        </ul> 
      </nav>
    )
  }else{
    return  <></>
  }
 
}

export default NavBar