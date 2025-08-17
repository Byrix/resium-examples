import NavCard from '@/app/ui/home/nav-card';

export default function Home() {
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
            page: '/tutorials/new-building',
            second: 'https://cesium.com/learn/cesiumjs-learn/cesiumjs-interactive-building/',
            github: '#',
          }}
        />
      </div>
    </main>
  )
}