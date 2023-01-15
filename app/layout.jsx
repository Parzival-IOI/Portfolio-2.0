import '../styles/globals.css';
import Navbar from './Navbar';



export default function RootLayout({ children }) {


    return (
      <html lang="en">
        <head />
        <body className='relative z-0 min-h-full'>
            <Navbar></Navbar>
            <main>{children}</main>
        </body>
      </html>
    );
  }
  