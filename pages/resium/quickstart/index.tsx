import dynamic from 'next/dynamic';
import Head from 'next/head';

const ResiumMap = dynamic(
  () => import('@/components/resium/quickstart/map'),
  { ssr: false }
)

export default function Page() {
  return (
    <>
      <Head>
        <link rel='stylesheet' href='cesium/Widgets/widgets.css' />
      </Head>
      <ResiumMap />
    </>
  );
}