import { ReactElement } from 'react';
import Layout from '@/components/layout';
import type { NextPageWithLayout } from '@/pages/_app'
import DividerHorizontal from '@/components/daisy/divider-horizontal';

const Page: NextPageWithLayout = () => {
  return (
    <main className='h-screen flex justify-center items-center'>
      <DividerHorizontal 
        className='w-3/4 items-center justify-center' 
        leftLabel='Cesium'
        leftHref='/cesium'
        rightLabel='Resium'
        rightHref='/resium'
      />
    </main>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page;