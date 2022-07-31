import React, { ReactElement } from 'react';
import Layout from '@/components/layout/Layout';

const FavoritePage = () => {
  return <div>this is love page</div>;
};

FavoritePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default FavoritePage;
