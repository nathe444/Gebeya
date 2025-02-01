import CommonForm from '@/components/common/Form'
import  {loginFormControls}  from '@/config/index'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const initialState = {
    email : '',
    password : ''
}

const Login = () => {
    const [formData, setFormData] = useState(initialState)
    const onSubmit = (data) => {
        
    }
  return (
    <div className='mx-auto w-full max-w-md space-y-6'> 
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>Sign in to your account</h1>
            <p>Don&apos;t have an account? <Link className='font-medium text-primary hover:underline' to={'/auth/register'}>Sign Up</Link></p>
        </div>
        <CommonForm 
        formControls={loginFormControls}
        buttonText={'Sign In'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        />
 
    </div>
  )
}

export default Login