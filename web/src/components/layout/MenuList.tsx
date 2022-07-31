import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { MdOutlineInsertChartOutlined } from 'react-icons/md';
import { MdOutlineBookmarkBorder } from 'react-icons/md';
import { MdOutlineSchool } from 'react-icons/md';
import { RiSettings4Line } from 'react-icons/ri';
import { TbBook } from 'react-icons/tb';

import MenuItem from '@/components/layout/MenuItem';

const MenuList = () => {
  const router = useRouter();

  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { icon: <MdOutlineInsertChartOutlined />, label: 'overview', path: '/' },
    { icon: <MdOutlineSchool />, label: 'test', path: 'test' },
    { icon: <MdOutlineBookmarkBorder />, label: 'favorite', path: 'favorite' },
    { icon: <TbBook />, label: 'vocab', path: '/' },
    { icon: <RiSettings4Line />, label: 'setting', path: '/' },
  ];

  useEffect(() => {
    const curPath = router.asPath.split('/')[1];
    const activeItem = items.findIndex((item) => item.path === curPath);
    activeItem != -1 && setActiveIndex(activeItem);
  }, [router.asPath]);

  return (
    <ul>
      {items.map((item, idx) => (
        <MenuItem
          key={idx}
          isActive={activeIndex === idx}
          icon={item.icon}
          label={item.label}
          path={item.path}
        />
      ))}
    </ul>
  );
};

export default MenuList;
