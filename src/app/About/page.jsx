"use client";

import { useRouter } from 'next/navigation'
import React from 'react'

export default function AboutPage() {
    const router = useRouter();
    const handleNavigation = () => {
        router.push('/About/Address');
    };
    return (
        <div className='flex justify-evenly h-screen h-max-[800px] items-center'>
            <h1 className='text-6xl'>About</h1>
            <button type="button" onClick={handleNavigation} className='bg-white text-black p-5'>Address</button>
        </div>
    )
}
