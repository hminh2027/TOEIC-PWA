import React, { ReactElement } from 'react';
import Layout from '@/components/layout/Layout';

const Auth = () => {
  return <div>this is auth page</div>;
};

Auth.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Auth;
