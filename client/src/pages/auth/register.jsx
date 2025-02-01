import CommonForm from '@/components/common/Form'
import { registerFormControls } from '@/config/index'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { register } from '@/store/auth-slice/index'
import { useDispatch } from 'react-redux'
import { useToast } from '@/hooks/use-toast'

const initialState = {
  userName: '',
  email: '',
  password: ''
}

const Register = () => {
  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {toast} = useToast();

  console.log(formData);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(register(formData)).then((data)=>{
      if(data?.payload?.success){
        toast({
          title: data?.payload?.message,
          message: 'Account created successfully',
          type: 'success',
        })
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
        buttonText={'Sign Up'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />

    </div>
  )
}

export default Register