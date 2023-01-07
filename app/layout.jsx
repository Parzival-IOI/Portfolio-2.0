import '../styles/globals.css';
import NavLink from './nav-link';

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head />
        <body>
            <nav className='flex py-3 bg-slate-600'>
                <NavLink href="/" className='ml-3 mr-auto font-semibold px-3 py-1 rounded  transition duration-300 ease-linear' >Home</NavLink>
                <NavLink href="/About" className="mr-8 font-semibold px-3 py-1 rounded  transition duration-300 ease-linear" >About</NavLink>
            </nav>
            {children}
        </body>
      </html>
    );
  }
  