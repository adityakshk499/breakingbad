import React,{useState,useEffect,useRef} from "react";
import axios from 'axios'

const Deaths = () => {
    const [data, setdata] = useState([])
    const [season, setseason] = useState('1')
    const dataFetchedRef = useRef(false);

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
      axios.get('https://www.breakingbadapi.com/api/deaths').then(res => setdata(res.data)).catch(err => console.log(err)) 
    },[season])
    
    function funcseason(e){
        setseason(e.target.value)
        
        
    }

    

  return (
    <div className="w-full min-h-[94vh]  bg-black">
     <div className="flex items-center justify-center flex-col space-y-5 ">
     <h1 className="text-center text-white text-xl font-semibold px-4 pt-2">Here is the table of all the deaths of characters happens in breaking bad.</h1>
      <div className="flex flex-col justify-center items-center ">
    <div className="text-white px-3">
        <h1 className="text-2xl text-yellow-300 font-bold mb-2">Season</h1>
    </div>
    <div className="flex flex-row justify-center items-center ">
        <button onClick={funcseason} disabled={season==='1'} value={1} className={season==='1'?"bg-gradient-to-r text-lg font-bold border-r border-black from-yellow-800 to-yellow-700 px-3 py-1":"bg-gradient-to-r text-lg font-bold border-r border-black from-yellow-400 to-yellow-200 px-3 py-1"}>1</button>
        <button onClick={funcseason} disabled={season==='2'} value={2} className={season==='2'?"bg-gradient-to-r text-lg font-bold border-r border-black from-yellow-800 to-yellow-700 px-3 py-1":"bg-gradient-to-r text-lg font-bold border-r border-black from-yellow-400 to-yellow-200 px-3 py-1"}>2</button>
        <button  onClick={funcseason} disabled={season==='3'} value={3} className={season==='3'?"bg-gradient-to-r text-lg font-bold border-r border-black from-yellow-800 to-yellow-700 px-3 py-1":"bg-gradient-to-r text-lg font-bold border-r border-black from-yellow-400 to-yellow-200 px-3 py-1"}>3</button>
        <button onClick={funcseason} disabled={season==='4'} value={4}  className={season==='4'?"bg-gradient-to-r text-lg font-bold border-r border-black from-yellow-800 to-yellow-700 px-3 py-1":"bg-gradient-to-r text-lg font-bold border-r border-black from-yellow-400 to-yellow-200 px-3 py-1"}>4</button>
        <button onClick={funcseason} disabled={season==='5'} value={5}  className={season==='5'?"bg-gradient-to-r text-lg font-bold border-r border-black from-yellow-800 to-yellow-700 px-3 py-1":"bg-gradient-to-r text-lg font-bold border-r border-black from-yellow-400 to-yellow-200 px-3 py-1"}>5</button>
    
    </div>
      </div>

      <div className="text-white text-center mx-2 ">
        <table className="mx-auto border-colapse  mb-10 w-auto border-seprate border-spacing-2 border border-slate-500 table-auto">
            <thead>
                <tr className="border text-sm font-medium md:font-semibold md:text-2xl">
                    <th className="border-r">Name</th>
                    <th className="border-r">Cause</th>
                    <th className="border-r">Responsible</th>
                    {/* <th className="border-r px-2" >Season</th> */}
                    <th className="border-r px-2">Episodes</th>
                </tr>
            </thead>
            <tbody>
             {data.length===0?null:data.filter(data => data.season==season).map((data,index)=> (
                <tr className="border text-xs md:text-xl" key={index}>
                    <td className="border-r">{data.death}</td>
                    <td className="border-r">{data.cause}</td>
                    <td className="border-r">{data.responsible}</td>
                    {/* <td className="border-r">{data.season}</td> */}
                    <td className="border-r">{data.episode}</td>
                </tr>
             ))}
            </tbody>
        </table>



      </div>
      </div>
    </div>
  );
};

export default Deaths;
