import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { api } from '@/api/axios';
import { ToastContainer } from 'react-toastify';
import { notify } from '@/components/Toast';
import google from '../../../public/images/google.png';
import facebook from '../../../public/images/facebook.png';
import apple from '../../../public/images/apple.png';

const LoginPage = () => {
  const [credential, setCredential] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await api.post('auth/login', { ...credential });
      notify(res.data.message, 'success');
    } catch (e: any) {
      setError(e.response.data);
      if (e.response.data.message) notify(e.response.data.message, 'error');
    }
  };

  return (
    <div className='bg-[#f3eef2] h-full flex flex-col justify-center'>
      {/* container */}
      <div className='flex flex-col justify-between mx-6 lg:w-1/3 lg:mx-auto bg-[#f3eef2]'>
        {/* heading */}
        <div className='h1 text-center my-4'>Login</div>
        {/* form */}
        <div>
          <div className='my-4'>
            <input
              className={error.email ? 'tw-input-err' : 'tw-input'}
              type='text'
              placeholder='Enter email'
              name='email'
              value={credential.email}
              onChange={handleInputChange}
              autoFocus
            />
            {error.email && (
              <div className='text-[#f02849] my-3'>{error.email}</div>
            )}
          </div>
          <div className='my-4'>
            <input
              className={error.password ? 'tw-input-err' : 'tw-input'}
              type='password'
              placeholder='Password'
              name='password'
              value={credential.password}
              onChange={handleInputChange}
            />
            {error.password && (
              <div className='text-[#f02849] my-3'>{error.password}</div>
            )}
          </div>
          <div className='my-4 text-right'>
            <Link href='/'>
              <a className=''>Recovery password</a>
            </Link>
          </div>
          <div className='my-6'>
            <button onClick={handleSubmit} className='tw-btn'>
              Log in
            </button>
          </div>
        </div>
        {/* dividing line */}
        <div className='text-center my-4'>Or continue with</div>

        {/* login options */}
        <div className='flex my-8 justify-around'>
          <a className='flex p-3' href='#'>
            <Image src={google} alt={'google icon'} />
          </a>
          <a className='flex p-3' href='#'>
            <Image src={apple} alt={'apple icon'} />
          </a>
          <a className='flex p-3' href='#'>
            <Image src={facebook} alt={'facebook icon'} />
          </a>
        </div>

        {/* register */}
        <div className='text-center my-4'>
          Not a member?
          <Link href='signup'>
            <a className='text-blue-600'> Sign up now</a>
          </Link>
        </div>
      </div>
      {/* Toast */}
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
