import NavCard from '@/app/ui/home/nav-card';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='h-auto max-h-94/100 w-full flex flex-col p-4 justify-center items-center'>
      <div className='flex flex-row gap-2 grow-1 max-h-1/3 w-full justify-center'>
        <div className='grow-1 bg-base-100' />
        <div className='card card-side grow-3 bg-base-200 rounded-box border-base-200 border-12'>
          <figure>
            <Image src="/daisy-stawbee.webp" width={300} height={400} alt='movie' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-4xl font-semibold'>Sandbox</h2>
            <p className='text-lg'>The digitial frontier!</p>
            <div className='card-actions justify-end'>
              <Link href='/sandbox' className='btn btn-primary btn-xl'>Visit</Link>
            </div>
          </div>
        </div>
        <div className='grow-1 bg-base-100' />
      </div>
      <div className='divider grow-0' />
      <div className='flex grow-2 w-full items-center justify-center max-h-60/100'>
        <NavCard
          img="/daisy-grapes.webp"
          text={{
            title: "Quickstart",
            body: "CesiumJS's quickstart guide built with Resium. Renders OSM buildings on satellite imagery all in 3D."
          }}
          links={{
            page: '/tutorials/quick-start',
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
            page: '/tutorials/flight-tracker',
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
            page: '#',
            second: 'https://cesium.com/learn/cesiumjs-learn/cesiumjs-interactive-building/',
            github: '#',
          }}
        />
      </div>
    </main>
  );
}