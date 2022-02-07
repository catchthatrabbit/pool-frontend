import React, { FC } from 'react'
import Link from 'next/link'

interface LinkProps extends React.ComponentPropsWithoutRef<'button'> {
  to: string
}

export default React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, children }, ref: any) => {
    return (
      <Link href={to}>
        <a ref={ref}>{children}</a>
      </Link>
    )
  },
)
