import React from 'react'
import './Login.scss'
import Input from '@/components/input/Input'
import Button from '@/components/button/Button'
import GOOGLE_LOGO from "@/assets/images/googleLogo.png"
import FACEBOOK_LOGO from "@/assets/images/facebookLogo.png"
import { useForm, SubmitHandler, Controller } from "react-hook-form";
interface FormValues {
  username: string;
  password: string;
}
const Login = () => {
  const loginOptions = {
    username: {
      required: "Name is required",
      minLength: {
        value: 6,
        message: "Password must have at least 6 characters",
      },
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must have at least 6 characters",
      },
    },
  };
  const { control, handleSubmit
    , formState: { errors } } = useForm<FormValues>(
      {
        defaultValues: {
          username: "",
          password: ""
        }
      }
    )
  const handleClickBtnLogin: SubmitHandler<FormValues> = (data) => {
    console.log('dataLogin', data)
  }
  const handleClickBtnLoginGoogle = () => {
    console.log('login google')
  }
  const handleClickBtnLoginFacebook = () => {
    console.log('login facebook')
  }
  return (
    <div className='login'>
      <div className="login-container">
        <h1 className='login-heading'>Login</h1>
        <div className="login-form">
          <form onSubmit={handleSubmit(handleClickBtnLogin)}>
            <div className='login-form-item'>
              <Controller
                control={control}
                render={({ field }) => (
                  <Input placeholder='username'
                    {...field}
                  />
                )}
                name="username"
              />
            </div>
            <small className='error-alert'>
              {errors?.username && errors.username.message}
            </small>
            <div className='login-form-item'>
              <Controller
                control={control}
                render={({ field }) => (
                  <Input placeholder='password' {...field}
                  />
                )}
                name="password"
              />
            </div>
            <small className='error-alert'>
              {errors?.password && errors.password.message}
            </small>
            <div className='btn-submit'>
              <Button fullWidth type='submit' text="Login" />
            </div>
          </form>
          <div className='btn-login-google' onClick={handleClickBtnLoginGoogle}>
            <img className='icon-google' width={20} height={20} src={GOOGLE_LOGO} alt="google logo" />
            <Button icon={GOOGLE_LOGO} bgColor='white' fullWidth text="Login with Google" />
          </div>
          <div className='btn-login-facebook' onClick={handleClickBtnLoginFacebook}>
            <img className="icon-facebook" width={20} height={20} src={FACEBOOK_LOGO} alt="facebook logo" />
            <Button bgColor='white' fullWidth text="Login with Facebook" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login