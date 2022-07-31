import * as React from 'react';
import SideBarMenu from '@/components/layout/SideBarMenu';
import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='flex h-screen overflow-y-hidden'>
      <SideBarMenu />
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
}
