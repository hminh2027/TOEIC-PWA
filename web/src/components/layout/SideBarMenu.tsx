import React from 'react';
import MenuList from './MenuList';
import Image from 'next/image';
import logo from '~/images/logo.png';
import { MdOutlineLogout } from 'react-icons/md';
import MenuItem from '@/components/layout/MenuItem';

const SideBarMenu = () => {
  return (
    <div className='flex border-r-2'>
      <div className='flex flex-col justify-between mx-12'>
        <a className='flex py-10 mx-auto' href='#'>
          <Image
            className='object-contain '
            width={150}
            height={50}
            src={logo}
            alt='logo icon'
          />
        </a>
        <div>
          <MenuList />
        </div>
        <button onClick={() => console.log('clicked')}>
          <MenuItem label='Logout' icon={<MdOutlineLogout />} path={'/'} />
        </button>
      </div>
    </div>
  );
};

export default SideBarMenu;
