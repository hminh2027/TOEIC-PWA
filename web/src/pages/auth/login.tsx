import React, { useState } from 'react';
import Link from 'next/link';

const LoginPage = (props) => {
  const [credential, setCredential] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(credential);
  };

  return (
    <div className='bg-[#f3eef2]'>
      {/* container */}
      <div className='m-6 bg-[#f3eef2]'>
        {/* heading */}
        <div className='h1 text-center'>Login</div>
        {/* form */}
        <div>
          <div className='w-full my-2'>
            <input
              className='w-full p-3 outline-0 border-0 rounded-lg'
              type='text'
              placeholder='Enter email'
              name='email'
              value={credential.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              className='w-full'
              type='password'
              placeholder='Password'
              name='password'
              value={credential.password}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Link href='/'>
              <a className=''>Recovery password</a>
            </Link>
          </div>
          <div>
            <button onClick={handleSubmit} className='w-full'>
              Sign in
            </button>
          </div>
        </div>
        {/* dividing line */}
        <div className='text-center'>Or continue with</div>

        {/* login options */}
        <div>Google</div>
        <div>Apple</div>
        <div>Facebook</div>
        {/* register */}
        <div>
          Not a member?{' '}
          <Link href='/'>
            <a className='text-blue-600'>Sign up now</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
