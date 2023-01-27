// "use client";
import Image from 'next/image';
import par from '../styles/parallax.module.css'
import Script from 'next/script';

const Parallax = ({children}) => {

  return (
      <div className={`${par.wrapper} cssFont2`} >
        <section className={par.container}>
              <Image src={`/BackGround.png`} alt="Loading..." className={par.parallax} width={300} height={300}/>
              <Image src={`/FourthBG.png`} alt="Loading..." className={par.parallax} width={400} height={400}/>
              <div className={par.parallax} >
                <h3 className=" text-2xl font-bold mt-[40vh] lg:mt-0 lg:text-3xl sm:mt-[5vh] sm:text-2xl text-orange-500 drop-shadow-xl text-center"  >Welcome to My 2.0 Portfolio</h3>
              </div>
              <Image src={`/ThirdBG.png`} alt="Loading..." className={par.parallax} width={600} height={600}/>
              <Image src={`/SecondBG.png`} alt="Loading..." className={par.parallax} width={800} height={800}/>
              <Image src={`/FirstBG.png`} alt="Loading..." className={par.parallax} width={900} height={900}/>
              <Script defer>
                {}
              </Script>
        </section>
        <div className='h-[200%] w-full mt-[15vh] bg-slate-900' >{children}</div>
      </div>
  )
}

export default Parallax