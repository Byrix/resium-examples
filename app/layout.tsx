import NavBar from "@/app/ui/navbar";
import "@/app/ui/global.css"

export default function Layout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='h-screen w-screen bg-base-100 text-base-content'>
        <NavBar />
        {children}
      </body>
    </html>
  );
}