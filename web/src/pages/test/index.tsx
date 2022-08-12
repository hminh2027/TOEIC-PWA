import Layout from '@/components/layout/Layout';
import React, { ReactElement } from 'react';
import TestCard from '@/components/test/TestCard';

const TestPage = () => {
  const dummy = [
    { name: 'ETC 2022', duration: 60, skill: 'LISTENING', category: 'PART1' },
    { name: 'ETC 2022', duration: 60, skill: 'LISTENING', category: 'PART1' },
    { name: 'ETC 2022', duration: 60, skill: 'LISTENING', category: 'PART1' },
  ];
  return (
    <div className='mt-20'>
      <div>
        <div className='text-3xl capitalize font-extrabold'>
          practice listening
        </div>
        <div className='flex gap-6'>
          {dummy.map((d, index) => (
            <TestCard
              name={d.name}
              duration={d.duration}
              skill={d.skill}
              category={d.category}
            />
          ))}
        </div>
      </div>
      <div>
        <div className='text-3xl capitalize font-extrabold'>
          practice reading
        </div>
        <div className='flex'>
          {dummy.map((d, index) => (
            <TestCard
              name={d.name}
              duration={d.duration}
              skill={d.skill}
              category={d.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

TestPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default TestPage;
