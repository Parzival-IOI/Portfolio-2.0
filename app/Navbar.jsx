"use client";

import {useEffect, useState} from 'react'
import NavLink from './Navlink';

function Navbar() {
    const [position, setPostition] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=> {
        const updatePosition = () => {
            setPostition(window.scrollY);
            // console.log(window.scrollY)
        }

        window.addEventListener('scroll', updatePosition);

        return () => window.removeEventListener('scroll', updatePosition);
    }, [])

    function GotoTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
    
    function Toggle() {
        setIsOpen((e)=>!e);
    }

    function setFalse() {
        setIsOpen(false);
    }


  return (
    <div>
        <nav className={`flex py-3 z-10 w-full h-18 lg:h-20 shadow-sm select-none fixed transition-all duration-1000 ${position < 400 ? 'top-0' : 'top-[-15vw]'} ${position <= 200 ? 'bg-transparent' : 'bg-slate-500'}`}>
            <div className={` flex w-full h-full cssFont justify-between items-center`} id='Nav' >
                <div className="ml-[2%] flex ">
                    <NavLink href="/" onClick={setFalse}>Home</NavLink>
                </div>
                <button className='md:hidden mr-6 z-30' onClick={Toggle}>
                    {isOpen ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg> 
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-text-paragraph" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
                    </svg>}
                </button>
                <div className={`md:hidden md:z-[-10] fixed w-full h-full left-0 top-0 ${isOpen ? '' : 'hidden'}`} onClick={Toggle}></div>
                <div className={`flex flex-col fixed w-[75%] sm:w-[80%] h-full items-center justify-center gap-[10vh] right-0 top-0 z-20 bg-teal-800 bg-opacity-75 transition-all duration-1000 ${isOpen ? '' : 'right-[-100%]'} md:gap-6 md:mr-6 md:z-0 md:bg-transparent md:static md:flex-row md:w-auto`}>
                    <NavLink href="/Work" onClick={setFalse}>Work</NavLink>
                    <NavLink href="/About" onClick={setFalse}>About</NavLink>
                    <NavLink href="/Contact" onClick={setFalse}>Contact</NavLink>
                </div>
            </div>
        </nav>
        <button className={`bottom-3 fixed animate-bounce lg:w-10 lg:h-10 md:w-9 md:h-9 sm:w-8 sm:h-8 w-7 h-7 transition-all duration-1000  ${position < 400 ? 'right-[-20vw]' : "right-3"}`} onClick={GotoTop}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-circle-fill lg:w-10 lg:h-10 md:w-9 md:h-9 sm:w-8 sm:h-8 w-7 h-7" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
            </svg>
        </button>
    </div>
        )
}


export default Navbar