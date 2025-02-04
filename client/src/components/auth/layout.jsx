import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div className='flex w-full min-h-screen'>
            <div 
                className='hidden lg:flex justify-center items-center w-[63%] px-12 bg-cover bg-center relative'
                style={{backgroundImage: 'url("/sale2.jpg")'}}
            >
                <div className='absolute inset-0 bg-black/50'></div>
                <div className='max-w-md space-y-6 text-primary-foreground z-10'>
                    <div className='bg-transparent p-8 rounded-lg'>
                        <h1 className='text-5xl font-extrabold tracking-tight absolute top-10 left-10'>
                            <span className='text-green-500'>Welcome</span>{' '}
                            <span className='text-slate-900'>To</span>{' '}
                            <span className='text-slate-600'>Gebeya</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-1 justify-center items-center bg-background px-4 py-12 sm:px-6 lg:px-8'>
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout