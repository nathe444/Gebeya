import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const CheckAuth = ({ isAuthenticated, user, children }) => {
   
    const location = useLocation();
    console.log(location)

    // Allow access to register page for unauthenticated users
    if (!isAuthenticated &&
        (location.pathname.includes('/register'))) {
        return <>{children}</>;
    }

    // Redirect to login if not authenticated and not on login/register pages
    if (!isAuthenticated &&
        !(
            location.pathname.includes('/login') ||
            location.pathname.includes('/register')
        )) {
        return <Navigate to='/auth/login' />;
    }

    // Redirect authenticated users away from login/register
    if (isAuthenticated &&
        (location.pathname.includes('/login') || location.pathname.includes('/register'))) {
        if (user?.role === 'admin') {
            return <Navigate to='/admin/dashboard' />
        } else {
            return <Navigate to='/shop/home' />
        }
    }

    // Prevent non-admin users from accessing admin routes
    if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes('/admin')) {
       return <Navigate to='/unauth-page'/>
    } 
   
    // Redirect admin users trying to access shop routes
    if(isAuthenticated && user?.role === 'admin' && location.pathname.includes('/shop')) {
        return <Navigate to='/admin/dashboard' />
    }

    return <>{children}</>;
}

export default CheckAuth