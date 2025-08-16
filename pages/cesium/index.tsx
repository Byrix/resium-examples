import React from 'react';
import Link from 'next/link';
import CesiumWrapper from '@/components/cesium/cesium-wrapper';

async function getPosition() {
  return {
    position: {
      lat: 37.655,
      lng: -122.4175,
    }
  };
}

export default async function Page() {
  const fetchedPosition = await getPosition();
  return (
    <main>
      <Link
        className='fixed z-1 left-[0.5rem] top-[0.5rem] font-serif bg-ctp-base text-ctp-blue-500 p-1'
        href='https://github.com/hyundotio/nextjs-ts-cesium-example' 
      > Source link </Link>
      
      <CesiumWrapper positions={[fetchedPosition.position]} />
    </main>
  );
}