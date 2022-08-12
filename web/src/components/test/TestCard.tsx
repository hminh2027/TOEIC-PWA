import React, { ReactElement } from 'react';
import Card from '@/components/common/Card';
import PropTypes, { InferProps } from 'prop-types';

type TestCardProps = {
  name: string;
  duration: string;
  skill: string;
  category: string;
};

const TestCard = ({
  name,
  duration,
  skill,
  category,
}: InferProps<typeof TestCard.propTypes>) => {
  return (
    <Card>
      <div className='p-4 w-full gap-4 '>
        <div className='flex justify-between mb-4'>
          <div className='rounded-full bg-amber-400 py-2 px-3 text-xs font-bold'>
            {skill}
          </div>
          <div>x</div>
        </div>
        <div className='flex-col flex gap-2'>
          <div className='font-bold text-lg'>{name}</div>
          <div className='text-sm'>duration: {duration}min</div>
          <div className='text-sm'>43/100 questions</div>
        </div>
      </div>
    </Card>
  );
};

TestCard.propTypes = {
  name: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  skill: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default TestCard;
