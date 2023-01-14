import Image from 'next/image';
import par from '../styles/parallax.module.css'
import {Eater} from '@next/font/google'

const Inter = Eater({
  weight: '400',
  subsets : ['latin'],
});

const Parallax = ({children}) => {
  return (
    <div className='overflow-x-hidden overflow-y-auto scroll-smooth' id='Scroll'>
      <div className={ `${par.wrapper} ${Inter.className}`}>
        <div className={par.container}>
              <Image src={`/BackGround.png`} alt="Loading..." className={par.parallax} width={300} height={300} loading='eager'/>
              <Image src={`/FourthBG.png`} alt="Loading..." className={par.parallax} width={400} height={400} loading='lazy'/>
              <div className={par.parallax} >
                <h3 className=" text-2xl font-bold mt-[40vh] lg:mt-0 lg:text-3xl sm:mt-[5vh] sm:text-2xl text-orange-500 drop-shadow-xl "  >Welcome to My 2.0 Portfolio</h3>
              </div>
              <Image src={`/ThirdBG.png`} alt="Loading..." className={par.parallax} width={600} height={600} loading='lazy'/>
              <Image src={`/SecondBG.png`} alt="Loading..." className={par.parallax} width={800} height={800} loading='lazy'/>
              <Image src={`/FirstBG.png`} alt="Loading..." className={par.parallax} width={1000} height={1000} loading='eager'/>
        </div>
        <div className='h-[200%] w-full mt-[15vh] bg-slate-900' >{children}</div>
      </div> 
    </div>
  )
}

export default Parallax