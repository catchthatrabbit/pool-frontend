import Link from 'next/link';
import React from 'react';

interface LinkProps extends React.ComponentPropsWithoutRef<'button'> {
  to: string
}

export default React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, children }, ref: any) => {
    return (
      <Link href={to} ref={ref}>
        {children}
      </Link>
    )
  },
)
