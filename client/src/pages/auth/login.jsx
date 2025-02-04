import CommonForm from '@/components/common/Form'
import  {loginFormControls}  from '@/config/index'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '@/store/auth-slice'

const initialState = {
    email : '',
    password : ''
}

const Login = () => {
    const [formData, setFormData] = useState(initialState)
    const loading = useSelector((state)=>state.auth.loading)
    const dispatch = useDispatch();  

    const onSubmit = (event) => {
      event.preventDefault();
      dispatch(login(formData)).then((data)=>{
        console.log(data)
      })
    }


  return (
    <div className='mx-auto w-full max-w-md space-y-6'> 
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>Sign in to your account</h1>
            <p>Don&apos;t have an account? <Link className='font-medium text-primary hover:underline' to={'/auth/register'}>Sign Up</Link></p>
        </div>
        <CommonForm 
        formControls={loginFormControls}
        buttonText={loading?'Sign In...' : 'Sign In'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        />
 
    </div>
  )
}

export default Login