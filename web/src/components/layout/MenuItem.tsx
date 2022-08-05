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
        <div className='flex items-center px-6 text-3xl'>{icon}</div>
        <div className='mr-20 capitalize'>{label}</div>
      </li>
    </Link>
  );
};

export default MenuItem;
