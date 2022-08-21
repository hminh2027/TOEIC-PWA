import TestService from '../../api/services/test.service';
import React, { useEffect } from 'react';

const TestDetail = () => {
  useEffect(async () => {
    const a = await TestService.getAll();
    console.log(a);
  }, []);

  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
};

export default TestDetail;
