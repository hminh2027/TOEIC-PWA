import Link from 'next/link';
import React, { ReactElement } from 'react';

type MenuItemProps = {
  icon: ReactElement;
  label: string;
  path: string;
  isActive: boolean;
};

const MenuItem = ({ icon, label, path, isActive }: MenuItemProps) => {
  return (
    <Link href={path}>
      <li className={isActive ? 'tw-menu-item-active' : 'tw-menu-item'}>
        <div className='flex items-center text-3xl px-6'>{icon}</div>
        <div className='capitalize mr-20'>{label}</div>
      </li>
    </Link>
  );
};

export default MenuItem;
