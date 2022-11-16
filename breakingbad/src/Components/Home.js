import React from 'react'


const Home = () => {
  return (
    <div className=' h-[92vh]  w-full top-[80px]'>
    
        
    <video className='object-cover h-[92vh] brightness-50  w-full absolute blur-sm -z-10' autoPlay={true} muted={true} loop={true} type="video/mp4" src="https://res.cloudinary.com/dbwc39val/video/upload/v1668401798/assetsbreaking/wall4_qcrfa3.mp4"/>
    
    <div className='flex flex-col items-center text-center justify-between space-y-16 '>
    <img className='max-w-[200px] md:max-w-[280px] ' src='https://res.cloudinary.com/dbwc39val/image/upload/v1668406209/assetsbreaking/hero2_ypqgcl.png' alt="/" />
        
        
        <p className='text-center text-yellow-400 text-2xl md:text-4xl  px-10 font-bold'>I am not in the meth business.  I am in the empire business.</p>
       
        <img className='max-w-[200px] md:max-w-[260px] ' src='https://res.cloudinary.com/dbwc39val/image/upload/v1668406210/assetsbreaking/logo_yuhcu3.png' alt="" />
        </div>
    </div>
  )
}

export default Home