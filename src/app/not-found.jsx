import Link from 'next/link'
import React from 'react'

export default function NotFoundPage404() {
  return (
    <div className=' h-screen h-max-[800px]'>
        <h1 className='flex items-center justify-center text-6xl'>404 NOT FOUND</h1>
        <div className='flex items-center justify-center'>
        <Link href="/">Go to Home</Link>
        </div>
        
    </div>
  )
}