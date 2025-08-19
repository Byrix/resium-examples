import Link from 'next/link';
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
    <div className='card bg-base-200 aspect-3/4 w-auto min-w-96 shadow-sm h-full border-base-200 border-12 rounded-box'>
      <figure className='shrink-1 min-h-0 overflow-clip rounded-box'>
        <img
          src={img}
          width={300}
          height={400}
          className='aspect-3/4 w-full h-auto'
          alt="Grape"
        />
      </figure>
      <div className='card-body items-center text-center min-h-auto grow-1'>
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
