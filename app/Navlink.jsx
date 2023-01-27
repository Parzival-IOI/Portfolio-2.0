"use client";
import Link from 'next/link';
import {useSelectedLayoutSegment} from "next/navigation"

const NavLink = ({href, className, children, onClick}) => {

    const segment = useSelectedLayoutSegment();
    const active = href === `/${segment}`;

    return (
    <Link href={href} onClick={onClick} className={active ? `${className} bg-lime-300 font-semibold px-3 py-1 rounded  transition duration-300 ease-linear` : `${className} bg-orange-400 font-semibold px-3 py-1 rounded  transition duration-300 ease-linear`}>{children}</Link>
  )
}

export default NavLink