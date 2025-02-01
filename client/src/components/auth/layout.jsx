import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div className='flex w-full min-h-screen '>
            <div className='hidden lg:flex justify-center items-center bg-black w-1/2 px-12'>
                <div className='max-w-md space-y-6 text-center text-primary-foreground'>
                    <h1 className='text-5xl font-extrabold tracking-tight'>Welcome To Gebeya</h1>
                </div>
            </div>
            <div className='flex flex-1 justify-center items-center bg-background px-4 py-12 sm:px-6 lg:px-8'>
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout