import React from 'react'

export default function ServiceDetailPage({ params }) {
    const  id = params.id;
  return (
    <div className='flex justify-center h-screen h-max-[800px] items-center'>
        <h1 className='text-6xl'>Services ID: {id}</h1>
    </div>
  )
}
