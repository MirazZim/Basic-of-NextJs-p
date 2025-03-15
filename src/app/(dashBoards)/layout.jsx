import React from 'react'

export default function DashboardLayout({ children }) {
  return (
    <div>
        <div  className='grid grid-cols-12'>
            {/* Sidebar */}
            <div className='col-span-3'>
                <ul className='bg-cyan-800 h-screen'>
                    <li>User Dashboard</li>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Logout</li>
                </ul>
            </div>
            {/* Main Content */}
            <div className='col-span-9'>
                {children}
            </div>
        </div>
    </div>
  )
}
