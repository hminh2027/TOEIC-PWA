import React, { useState } from 'react';
import { api } from '@/api/axios';
import { notify } from '@/components/Toast';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';

const SignupPage = () => {
  const [credential, setCredential] = useState({
    email: '',
    username: '',
    password: '',
    password2: '',
  });

  const [error, setError] = useState({
    email: '',
    username: '',
    password: '',
    password2: '',
  });

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await api.post('auth/signup', { ...credential });
      notify(res.data.message, 'success');
    } catch (e: any) {
      setError(e.response.data);
      if (e.response.data.message) notify(e.response.data.message, 'error');
    }
  };

  return (
    <div className='flex h-full flex-col justify-center bg-[#f3eef2]'>
      {/* container */}
      <div className='mx-6 flex flex-col justify-between bg-[#f3eef2]'>
        {/* heading */}
        <div className='h1 my-4 text-center'>Sign Up</div>
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
              <div className='my-3 text-[#f02849]'>{error.email}</div>
            )}
          </div>
          <div className='my-4'>
            <input
              className={error.username ? 'tw-input-err' : 'tw-input'}
              type='text'
              placeholder='Enter username'
              name='username'
              value={credential.username}
              onChange={handleInputChange}
              autoFocus
            />
            {error.username && (
              <div className='my-3 text-[#f02849]'>{error.username}</div>
            )}
          </div>
          <div className='my-4'>
            <input
              className={error.password ? 'tw-input-err' : 'tw-input'}
              type='password'
              placeholder='Enter password'
              name='password'
              value={credential.password}
              onChange={handleInputChange}
            />
            {error.password && (
              <div className='my-3 text-[#f02849]'>{error.password}</div>
            )}
          </div>
          <div className='my-4'>
            <input
              className={error.password2 ? 'tw-input-err' : 'tw-input'}
              type='password'
              placeholder='Confirm password'
              name='password2'
              value={credential.password2}
              onChange={handleInputChange}
            />
            {error.password2 && (
              <div className='my-3 text-[#f02849]'>{error.password2}</div>
            )}
          </div>
          <div className='my-6'>
            <button onClick={handleSubmit} className='tw-btn'>
              Sign up
            </button>
          </div>
        </div>

        {/* register */}
        <div className='my-4 text-center'>
          Already have an account?
          <Link href='login'>
            <a className='text-blue-600'> Log in now</a>
          </Link>
        </div>
      </div>
      {/* Toast */}
      <ToastContainer />
    </div>
  );
};

export default SignupPage;
