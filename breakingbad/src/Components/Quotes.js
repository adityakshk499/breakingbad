import React, { useState, useLayoutEffect } from "react";
import axios from "axios";
const Quotes = () => {
  const [quote, setquote] = useState([]);
  const [flag , setflag] = useState(false)
  function next (){
    axios
    .get("https://www.breakingbadapi.com/api/quote/random")
    .then((res) => setquote(res.data))
    .catch((err) => console.log(err));
    setflag(false)
}
 
function copy(){
    navigator.clipboard.writeText(quote[0].quote);
    setflag(true)
}

  useLayoutEffect(() => {
    axios
    .get("https://www.breakingbadapi.com/api/quote/random")
    .then((res) => setquote(res.data))
    .catch((err) => console.log(err));
  }, []);

 

  return (
    <div className="w-full h-[92vh] top-[100px] bg-black ">
      {/* <img
        className="absolute object-cover w-full h-[92vh]   brightness-50 -z-10"
        src='https://res.cloudinary.com/dbwc39val/image/upload/v1668495009/assetsbreaking/quote2_d2tq4j.jpg'
        alt="/"
      /> */}

      <div className="absolute top-[50%] md:w-[60vw] w-[80vw] h-fit   left-[50%] translate-x-[-50%] translate-y-[-50%]   shadow-lg rounded-2xl shadow-yellow-900">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="p-4 text-white border-b text-xl md:text-4xl">
            QUOTE OF THE DAY
          </p>
          {quote.length === 0 ? null : (
            <p className="italic text-yellow-100 text-lg md:text-2xl text-semibold p-4 border-b">
              "{quote[0].quote}"
            </p>
          )}
          {quote.length === 0 ? null : (
            <p className=" text-yellow-100   md:text-2xl text-semibold p-4 border-b">
              <span className="text-yellow-400 md:text-2xl"> Auhtor : </span>
              {quote[0].author}
            </p>
          )}
          {quote.length === 0 ? null : (
            <p className=" text-yellow-100  md:text-2xl text-semibold p-4 border-b">
              <span className="text-yellow-400 md:text-2xl"> Series : </span>
              {quote[0].series}
            </p>
          )}
          <div className="flex flex-row py-5 space-x-5">
            <button onClick={next} className="bg-gradient-to-r from-yellow-500 to-yellow-300  sm:hover:bg-yellow-200 text-Black font-bold py-2 px-5 rounded">
              Next
            </button>
            <button disabled={flag} onClick={copy} className={flag ?" sm:hover:bg-yellow-200 text-Black font-bold py-2 px-5 rounded bg-gradient-to-r from-yellow-500 to-yellow-300 opacity-50":" sm:hover:bg-yellow-200 text-Black font-bold py-2 px-5 rounded bg-gradient-to-r from-yellow-500 to-yellow-300"}>
              {flag?'Copied':'Copy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
