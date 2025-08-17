import Link from 'next/link';
import { DropdownItem } from '@/app/lib/types';
import { ChevronDown } from "@deemlol/next-icons";

export default function NavBar() {
  return (
    <nav className='navbar bg-base-200'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul tabIndex={0} className='menu menu-sm dropdown-content bg-base-200 rounded-box z- mt-3 w-52 p-2'>
            <li><Link href='/sandbox'>Sandbox</Link></li>
            <li>
              <a>Tutorials</a>
              <ul className='p-2'>
                <li><Link href='/tutorials/quick-start'>Quickstart</Link></li>
                <li><Link href='/tutorials/flight-tracker'>Flight Tracker</Link></li>
                <li><Link href='/tutorials/new-building'>Building Visualiser</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost text-4xl'>cycl<span className='text-ctp-blue-950 -ml-1'>3d</span></a>
      </div>

      <div className='navbar-end hidden lg:flex'>
        <div className='flex items-stretch'>
          <Link className='btn btn-ghost rounded-field' href='/sandbox'>Sandbox</Link>
          <DropdownHover 
            name='Tutorials'
            items={[
              {label: 'Quickstart', href: '/tutorials/quick-start'},
              {label: 'Flight Tracker', href: '/tutorials/flight-tracker'},
              {label: 'Building Visualiser', href: '/tutorials/new-building'},
            ]}
          />
        </div>
      </div>
    </nav>
  );
}



function DropdownHover({ name, items }: { 
  name: string,
  items: DropdownItem[],
}) {
  return (
    <div className='dropdown dropdown-end dropdown-hover'>
      <div tabIndex={0} role='button' className='btn btn-ghost rounded-field'>
        {name}<ChevronDown className='size-[1em] stroke-4 stroke-current' />
      </div>
      <ul tabIndex={0} className='dropdown-content menu bg-base-300 rounded-box z-1 w-64 p-2'>
        {items.map((item, i) => {
          const badge = item.className?.includes('-disabled') ? <div className='badge badge-outline badge-info '>WIP</div> : null;

          return (
            <li key={i} className={item.className || ''}>
              <Link href={item.href || ''}>{item.label}{badge}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}