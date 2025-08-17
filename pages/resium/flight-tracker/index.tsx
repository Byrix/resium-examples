import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Ion } from 'cesium';

const ResiumMap = dynamic(
  () => import('@/components/resium/flight-tracker/map'),
  { ssr: false }
)

export default function Page() {
  Ion.defaultAccessToken = `${process.env.NEXT_PUBLIC_CESIUM_TOKEN}`;

  return (
    <>
      <Head>
        <link rel='stylesheet' href='cesium/Widgets/widgets.css' />
      </Head>
      <ResiumMap />
    </>
  );
}