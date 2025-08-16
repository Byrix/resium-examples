import "@/app/ui/globals.css";
import NavBar from "@/components/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='h-screen v-screen bg-base-100 text-base-content'>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
