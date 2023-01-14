import '../styles/globals.css';
import NavLink from './nav-link';
import {Rubik} from '@next/font/google'

const rubik = Rubik({
  weight: '800',
  subsets : ['latin'],
});


export default function RootLayout({ children }) {


    return (
      <html lang="en">
        <head />
        <body className='relative z-0 min-h-full'>
            <nav className={`${'flex py-3 fixed z-10 w-full text-zinc-700'} ${rubik.className}`}>
                <NavLink href="/" className="ml-3 mr-auto" >Home</NavLink>
                <NavLink href="/Work" >Work</NavLink>
                <NavLink href="/About" className="ml-3">About</NavLink>
                <NavLink href="/Contact" className="mr-6 ml-3" >Contact</NavLink>
            </nav>
            <main>{children}</main>
        </body>
      </html>
    );
  }
  