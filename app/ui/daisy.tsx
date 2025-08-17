export function Collapse({ head, body, className='', id='' }: { 
  head: string,
  body: string,
  className?: string
  id?: string
}) {
  return (
    <div id={id} tabIndex={0} className={`collapse bg-base-100 border-base-300 border ${className}`}>
      <div id={`${id}-head`} className='collapse-title font-semibold'>{head}</div>
      <div id={`${id}-body`} className='collapse-content text-sm'>{body}</div>
    </div>
  );
}