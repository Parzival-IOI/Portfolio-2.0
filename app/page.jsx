import Image from 'next/image';
import par from '../styles/parallax.module.css'


const Page = () => {
  return (
    <div className='overflow-x-hidden overflow-y-auto'>
      <div className={par.wrapper}>
        <div className={par.container}>
              <Image src={`/BackGround.png`} alt="Loading..." className={par.parallax} width={300} height={300}/>
              <Image src={`/FourthBG.png`} alt="Loading..." className={par.parallax} width={400} height={400}/>
              <div className={par.parallax} >
                <h3 className="text-1xl font-bold mt-[30vh] lg:mt-0 lg:text-3xl sm:mt-[5vh] sm:text-2xl text-orange-500 drop-shadow-xl "  >Welcome to My 2.0 Portfolio</h3>
              </div>
              <Image src={`/ThirdBG.png`} alt="Loading..." className={par.parallax} width={500} height={500}/>
              <Image src={`/SecondBG.png`} alt="Loading..." className={par.parallax} width={800} height={800}/>
              <Image src={`/FirstBG.png`} alt="Loading..." className={par.parallax} width={1000} height={1000}/>
        </div>
        <div className='h-screen w-full mt-[15vh] bg-slate-900' ></div>
      </div> 
    </div>
  )
}

export default Page