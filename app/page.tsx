import React from 'react';
import Link from 'next/link';
import DividerHorizontal from './ui/daisy/divider-horizontal';

export default async function Home() {
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