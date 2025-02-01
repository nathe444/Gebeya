import CommonForm from '@/components/common/Form'
import  {registerFormControls}  from '@/config/index'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const initialState = {
    username : '',
    email : '',
    password : ''
}

const Register = () => {
    const [formData, setFormData] = useState(initialState)
    const onSubmit = (data) => {
        
    }
  return (
    <div className='mx-auto w-full max-w-md space-y-6'> 
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>Create new account</h1>
            <p>Already have an account? <Link className='font-medium text-primary hover:underline' to={'/auth/login'}>Login</Link></p>
        </div>
        <CommonForm 
        formControls={registerFormControls}
        buttonText={'Sign Up'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        />

    </div>
  )
}

export default Register