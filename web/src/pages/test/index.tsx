import Layout from '@/components/layout/Layout';
import React, { ReactElement } from 'react';

const TestPage = () => {
  return <div>this is test page</div>;
};

TestPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default TestPage;
