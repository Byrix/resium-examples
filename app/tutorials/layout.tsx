import { Ion } from 'cesium';

export default function Layout({ children }: { children: React.ReactNode}) {
  // if (!Ion.defaultAccessToken) Ion.defaultAccessToken=process.env.NEXT_PUBLIC_CESIUM_TOKEN || '';

  return (
    <main className='w-full grow-1 p-0 m-0'>
      {children}
    </main>
  );
}