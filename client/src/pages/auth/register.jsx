import CommonForm from '@/components/common/Form'
import { registerFormControls } from '@/config/index'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { register } from '@/store/auth-slice/index'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';

const initialState = {
  userName: '',
  email: '',
  password: ''
}

const Register = () => {
  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {submitting} = useSelector((state) => state.auth);


  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(register(formData)).then((data)=>{
      // console.log(data)
      if(data?.payload?.success){  
        navigate('/auth/login')
      } 
    });
  }
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold'>Create new account</h1>
        <p>Already have an account? <Link className='font-medium text-primary hover:underline' to={'/auth/login'}>Login</Link></p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={submitting ?'Sign up...' : 'Sign Up'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        Disabled = {submitting}
      />

    </div>
  )
}

export default Register