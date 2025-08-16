import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className='navbar bg-base-300'>
      <Link href='/' className='btn btn-ghost text-2xl'>cycl3d</Link>
    </nav>
  )
}