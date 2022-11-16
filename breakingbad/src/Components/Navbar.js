import React,{useState} from "react";
import { GiTransparentTubes } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
    const[nav,setnav] = useState(false)

  

   function handlechange(){
    setnav(!nav)
   }

  return (
    <div className="w-full border-b  border-b-teal-900   h-[80px] bg-black flex flex-row items-center  justify-between">
      <div className="px-5 flex flex-row">
        <Link to={'/'} onClick={()=> setnav(false)} className="text-yellow-100 text-2xl font-semibold ">
          BreakingBad
        </Link>
        <GiTransparentTubes size={30} className="text-yellow-200" />
      </div>
      <div className="hidden  md:flex font-thin   flex-row  text-xl pr-10 space-x-10  text-yellow-100 ">
        <Link to={'characters'} className='hover:text-yellow-300 cursor-pointer'>Characters</Link>
        {/* <Link to={'episodes'} className='hover:text-yellow-300 cursor-pointer'>Episodes</Link> */}
        <Link to={'deaths'} className='hover:text-yellow-300 cursor-pointer'>Deaths</Link>
        <Link to={'quotes'} className='hover:text-yellow-300 cursor-pointer'>Quotes</Link>
      </div>
      <div onClick={handlechange} className="md:hidden mr-5 text-yellow-100 cursor-pointer">
        {nav?<AiOutlineClose size={25}/>:<AiOutlineMenu size={25}/>}
      </div>
      <div className={nav?"md:hidden z-10 fixed bg-black text-xl w-full text-yellow-100 font-medium h-fit  top-[78px]":'hidden'}>
        <ul className=" text-center">
            <li onClick={handlechange} className="py-4"><Link to={'characters'} className='hover:text-yellow-300 cursor-pointer'>Characters</Link></li>
            {/* <li onClick={handlechange} className="py-4">   <Link to={'episodes'} className='hover:text-yellow-300 cursor-pointer'>Episodes</Link></li> */}
            <li onClick={handlechange} className="py-4">   <Link to={'deaths'} className='hover:text-yellow-300 cursor-pointer'>Deaths</Link></li>
            <li onClick={handlechange} className="py-4 pb-6"> <Link to={'quotes'} className='hover:text-yellow-300 cursor-pointer'>Quotes</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

