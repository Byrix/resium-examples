import Link from 'next/link';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Github as GithubIcon } from '@deemlol/next-icons';

export default function NavCard({ img, text, links }: { 
  img: string,
  text: {
    title: string,
    body: string
  },
  links: {
    page: string,
    second: string,
    github: string,
  }
}) {
  return (
    <div className='card bg-base-200 w-96 shadow-sm'>
      <figure className='px-5 pt-5'>
        <Image
          src={img}
          className='rounded-box'
          width={300}
          height={400}
          alt="Grape"
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title text-2xl'>{text.title}</h2>
        <p className='px-2 pb-2'>{text.body}</p>
        <div className='card-actions w-full'>
          <Link
            className='btn btn-primary'
            href={links.page}
          >
            View
          </Link>
          <Link
            className='btn btn-secondary'
            href={links.second}
          >
            Guide
            <ArrowTopRightOnSquareIcon className='w-5' />
          </Link>
          <div className='flex flex-grow' />
          <Link
            className='btn btn-soft btn-square'
            href={links.github}
          >
            <GithubIcon size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}