import NavBar from "@/app/ui/navbar";
import "@/app/ui/global.css"

export default function Layout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='m-0 p-0'>
      <body className='h-screen w-screen bg-base-100 text-base-content m-0 p-0 flex flex-col'>
        <NavBar />
        {children}
      </body>
    </html>
  );
}