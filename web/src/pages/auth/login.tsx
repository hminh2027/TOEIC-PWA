import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { api } from '@/api/http';
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

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const res = await api.post('auth/login', { ...credential });
      notify(res.data.message, 'success');
    } catch (e: any) {
      setError(e.response.data);
      if (e.response.data.message) notify(e.response.data.message, 'error');
    }
  };

  return (
    <div className='flex h-full flex-col justify-center bg-white'>
      {/* container */}
      <div className='mx-6 flex flex-col justify-between bg-white lg:mx-auto lg:w-1/3'>
        {/* heading */}
        <div className='h1 my-4 text-center'>Login</div>
        {/* form */}
        <form method='post'>
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
            {error.email && <div className='my-3 text-red'>{error.email}</div>}
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
              <div className='my-3 text-red'>{error.password}</div>
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
        </form>
        {/* dividing line */}
        <div className='my-4 text-center'>Or continue with</div>

        {/* login options */}
        <div className='my-8 flex justify-around'>
          <a
            className='flex rounded-lg border-4 border-white p-3 transition-all hover:border-purple'
            href='#'
          >
            <Image src={google} alt={'google icon'} />
          </a>
          <a
            className='flex rounded-lg border-4 border-white p-3 transition-all hover:border-purple'
            href='#'
          >
            <Image src={apple} alt={'apple icon'} />
          </a>
          <a
            className='flex rounded-lg border-4 border-white p-3 transition-all hover:border-purple'
            href='#'
          >
            <Image src={facebook} alt={'facebook icon'} />
          </a>
        </div>

        {/* register */}
        <div className='my-4 text-center'>
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
