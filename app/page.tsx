import NavCard from '@/app/ui/home/nav-card';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='h-auto max-h-94/100 w-full flex flex-col p-4 justify-center items-center'>
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
            github: 'https://github.com/Byrix/resium-examples/tree/main/app/tutorials/quick-start',
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
            github: 'https://github.com/Byrix/resium-examples/tree/main/app/tutorials/flight-tracker',
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
            page: '/tutorials/new-building',
            second: 'https://cesium.com/learn/cesiumjs-learn/cesiumjs-interactive-building/',
            github: 'https://github.com/Byrix/resium-examples/tree/main/app/tutorials/new-building',
          }}
        />
      </div>
    </main>
  );
}
