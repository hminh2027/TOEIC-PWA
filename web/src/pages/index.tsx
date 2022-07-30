import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { useStore } from '@/store/store';

export default function HomePage() {
  const { volume, name } = useStore();

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
    </Layout>
  );
}
