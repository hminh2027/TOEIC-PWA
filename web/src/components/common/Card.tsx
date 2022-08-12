import React from 'react';
import { ScriptProps } from 'next/script';

const Card: React.FC<ScriptProps> = ({ children }) => {
  return (
    <div className='bg-white rounded-xl shadow-lg shadow-blue-600'>
      {children}
    </div>
  );
};

export default Card;
