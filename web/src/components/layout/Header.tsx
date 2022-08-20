import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 bg-white'>
      <input type='text' />
      <div>icon</div>

      {/*<Link src='/'>*/}
      {/*  <Image*/}
      {/*    className='object-contain'*/}
      {/*    width={150}*/}
      {/*    height={50}*/}
      {/*    src={logo}*/}
      {/*    alt='logo icon'*/}
      {/*  />*/}
      {/*</Link>*/}
    </header>
  );
};

export default Header;
