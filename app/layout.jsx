import '../styles/globals.css';
import Navbar from './Navbar';



export default function RootLayout({ children }) {


    return (
      <html lang="en">
        <body className='relative z-0 min-h-full'>
              <Navbar/>
              <main>{children}</main>
        </body>
      </html>
    );
  }
  