import Link from 'next/link';

export function DividerHorizontal({ leftHref, leftLabel, rightLabel, rightHref, sepText="OR", className='' }: { 
  leftHref?: string,
  leftLabel: string,
  rightHref?: string,
  rightLabel: string,
  sepText?: string
  className?: string
}) {
  const cardClasses = 'card bg-base-300 rounded-box grid h-20 grow place-items-center'
  const cardLeft = leftHref ? (<Link className={cardClasses} href={leftHref}>{leftLabel}</Link>) : (<div className={cardClasses}>{leftLabel}</div>)
  const cardRight = rightHref ? (<Link className={cardClasses} href={rightHref}>{rightLabel}</Link>) : (<div className={cardClasses}>{rightLabel}</div>)

  return (
    <div className={`flex ${className}`}>
      {cardLeft}
      <div className='divider divider-horizontal'>{sepText}</div>
      {cardRight}
    </div>
  );
}