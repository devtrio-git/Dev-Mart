import React from 'react'
import AuthLayout from '../../components/layouts/auth-layout';
import styles from './auth.module.scss';
import TextInput from '../../components/inputs/text-input';
import PrimaryButton from '../../components/buttons/primary-button';
import { Link } from 'react-router-dom';

const LoginPage = () => {

  const onSubmitLogin = (e) => {
    e.preventDefault();
  }
  return (
    <AuthLayout>
      <div>
        <h1 className='auth_heading'>Log into Dev Mart</h1>
        <p className='auth_title mt-3'>Enter your details below</p>
        <form className="mt-3">
          <TextInput styles={{ marginBottom: '18px' }} placeholder="Email" type="email" ></TextInput>
          <TextInput styles={{ marginBottom: '5px' }} placeholder="Password" type="password" ></TextInput>
          <small><Link className={styles.forget_password_link} to='/auth/login'>Forgot Password</Link></small>
          <div className={styles.button_wrapper}>
            <PrimaryButton loading={false} disabled={false} onClick={onSubmitLogin}>Log In</PrimaryButton>
          </div>
        </form>
        <span>Create a new account? <Link className={styles.login_link} to='/auth/sign-up'>Sign up</Link></span>

      </div>

    </AuthLayout>
  )
}

export default LoginPage;
