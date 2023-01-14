"use client";
import {useEffect, useState} from 'react'
import NavLink from './nav-link';

function Navbar() {
    const [position, setPostition] = useState(0);

    useEffect(()=> {
        const updatePosition = () => {
            setPostition(Scroll.scrollY);
            console.log(position)
        }
        const Scroll = document.getElementById('Scroll');
        Scroll.addEventListener('scroll', updatePosition);

        return () => Scroll.removeEventListener('scroll', updatePosition);
    }, [])

    


  return (
        <nav className='flex py-3 fixed z-10 w-full'>
            <NavLink href="/" className="ml-3 mr-auto" >Home</NavLink>
            <NavLink href="/Work" >Work</NavLink>
            <NavLink href="/About" className="ml-3">About</NavLink>
            <NavLink href="/Contact" className="mr-6 ml-3" >Contact</NavLink>
        </nav>
        )
}

export default Navbar