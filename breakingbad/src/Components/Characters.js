import React, { useState, useEffect } from "react";
import axios from "axios";

const Characters = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.breakingbadapi.com/api/characters")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full  min-h-[100vh] bg-black">
      <div className="p-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 ">
        {data.length === 0
          ? null
          : data.map((data, index) => (
              <div
                key={index}
                className=" mb-10 py-2 text-yellow-100 shadow-lg shadow-yellow-700 rounded-2xl  grid   grid-cols-2 gap-2 "
              >
                <img className="p-4 w-full h-full" src={data.img} alt="/" />
                <div className="flex flex-col  justify-center space-y-2 md:space-y-5">
                  <h1 className="text-sm md:text-lg font-extrabold">
                    Name : {data.name}
                  </h1>
                  <h1 className="text-sm md:text-lg font-extrabold">
                    Nickname : {data.nickname}
                  </h1>
                  <h1 className="text-sm md:text-lg font-extrabold">
                    Birthday : {data.birthday}
                  </h1>
                  <h1 className="text-sm md:text-lg font-extrabold">
                    Status : {data.status}
                  </h1>
                  <h1 className="text-sm md:text-lg font-extrabold">
                    Portrayed : {data.portrayed}
                  </h1>
                  <h1 className="text-sm md:text-lg font-extrabold">
                    Category : {data.category}
                  </h1>
                  <h1 className="text-sm md:text-lg font-extrabold">
                    Occupation : {data.occupation[0]}
                  </h1>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Characters;
