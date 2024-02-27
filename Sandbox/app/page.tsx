'use client'
import axios from "axios";
import { log } from "console";
import Image from "next/image";
import { useState } from "react";


const init_weather = {
  main: {
    temp: 'null',
  }
}

export default function Home() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(init_weather);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (e:React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let time1 = new Date().getTime();
    const response = await fetch(url);
    let time2 = new Date().getTime();

    const temp = await response.json();
    setWeather(temp);
    console.log(temp);
    console.log(time2 - time1);
    // fetch(url).then((res) => {
    //   setWeather(res.json());
    //   console.log(res.json());
    // })
    setCity('Delhi');
    setLoading(false);
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`;
  // console.log(city);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"> */}
      <div className="absolute top-0 left-0 bottom-0 bg-black/40 z-[1] " />
      <Image className="object-cover" alt='Background of the WebApp' src="https://images.unsplash.com/photo-1526079904738-b2dded861aed?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" layout="fill">
        {/* <h1> Hello</h1>
        <button onClick={fetchWeather}>Fetch data</button>
        <h2>
          {city}
        </h2>
        <h2>
          {weather?.main?.temp}
        </h2> */}
      </Image>


      {/*Search */}
      <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
        <form onSubmit={fetchWeather} className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl">
          <div className=" text-white  ">
            <input onChange={(e)=>{
              setCity(e.target.value)
            }} className="bg-transparent border-none text-white focus:outline-none text-2xl placeholder:text-white placeholder:font-mono placeholder:text-md"  type="text" placeholder="Search City"/>
          </div>
          <button >
            Icon
          </button>
        </form>
      </div>





    </main>
  );
}
