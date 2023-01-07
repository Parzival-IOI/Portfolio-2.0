"use client";
import Link from 'next/link';
import {useSelectedLayoutSegment} from "next/navigation"

const NavLink = ({href, className, children}) => {

    const segment = useSelectedLayoutSegment();
    const active = href === `/${segment}`;

    return (
    <Link href={href} className={active ? `${className} bg-lime-300` : `${className} bg-orange-400`}>{children}</Link>
  )
}

export default NavLink