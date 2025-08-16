import Image from 'next/image';
import Layout from '@/components/layout';
import type { NextPageWithLayout } from '@/pages/_app'
import { ReactElement } from 'react';
import NavCard from '@/components/resium/nav-card';

const Page: NextPageWithLayout = () => {
  return (
    <main className='h-screen flex justify-center items-center'>
      <div className='flex h-52/100 w-3/4 items-center justify-center'>
        <NavCard 
          img="/daisy-grapes.webp"
          text={{
            title: "Quickstart", 
            body: "CesiumJS's quickstart guide built with Resium. Renders OSM buildings on satellite imagery all in 3D."
          }}
          links={{
            page: '/resium/quickstart',
            second: 'https://cesium.com/learn/cesiumjs-learn/cesiumjs-quickstart/',
            github: '#',
          }}
        />
        <div className='divider divider-horizontal' />
        <NavCard 
          img="/daisy-cone.webp"
          text={{
            title: "Flight Tracker", 
            body: "CesiumJS tutorial that builds a Cesium app to visualize a real flights with radar data collected by FlightRadar24."
          }}
          links={{
            page: '/resium/flight-tracker',
            second: 'https://cesium.com/learn/cesiumjs-learn/cesiumjs-flight-tracker/',
            github: '#',
          }}
        />
        <div className='divider divider-horizontal' />
        <NavCard 
          img="/daisy-lemon.webp"
          text={{
            title: "Proposed Building", 
            body: "CesiumJS tutorial that builds a Cesium app to visualize a new proposed building."
          }}
          links={{
            page: '/resium/new-building',
            second: 'https://cesium.com/learn/cesiumjs-learn/cesiumjs-interactive-building/',
            github: '#',
          }}
        />
      </div>
    </main>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page;