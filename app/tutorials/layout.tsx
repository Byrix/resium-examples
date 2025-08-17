export default function Layout({ children }: { children: React.ReactNode}) {
  return (
    <main className='w-full grow-1 p-0 m-0'>
      {children}
    </main>
  );
}