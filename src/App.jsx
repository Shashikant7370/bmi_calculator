import { useState } from 'react';
import './App.css'
import Input from './Input';

function App() {
  const [height,setHeight] =useState(0)
  const [weight,setWeight] =useState(0)
  const [bmi, setBmi] = useState('')
  const [message,setMessage] = useState("")

  
  const calcBMI = ()=>{
    const convert_cm = height/100;
    const res = weight/(convert_cm*convert_cm)
    if(res>10 && res<15){
      setMessage("Severely underweight")
    }
    else if(res<18 && res>=15){
      setMessage("Under Weight")
    }else if(res<=25 && res>=18){
      setMessage("Healthy weight")
    }else if(res<=30 && res>25){
      setMessage("Over Weight")
    }else if(res<=35 && res>30){
      setMessage("Moderately Obese")
    }else if(res>35 && res<=50){
      setMessage("Very severely obese")
    }else{
      setMessage("Ab to marega")
    }
    
    setBmi(res)
  }

  const reloadBMI = ()=>{
    setHeight(0)
    setWeight(0)
    setBmi('')
  }

  return (
    <>
      <div className="flex justify-end items-center w-[1320px] h-screen">
        <img
          src="./public/wp6938252.jpg"
          className="fixed top-0 left-0 h-screen w-screen"
          alt=""
        />
        <div className="flex flex-col bg-slate-900 w-[450px] text-white shadow-lg shadow-slate-500 rounded-md p-2 z-10">
          <img
            src="./public/bmi_calculator_wheel.webp"
            alt="bmi_image"
            className="z-10 mb-2 backdrop-blur-0"
          />
          <hr />
          <h1 className="text-center text-orange-600 text-3xl font-bold m-2">
            BMI Calculator
          </h1>

          <div className="flex flex-col gap-2 m-3">
            <label className="text-xl ">Enter Weight (In kg)</label>
            <input
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
              type="number"
              placeholder="Enter your weight in kg."
              className="py-1 px-2 rounded-sm outline-none text-black text-[20px] "
            />
          </div>

          <div className="flex flex-col gap-2 m-3">
            <label className="text-xl ">Enter height (In cm)</label>
            <input
              onChange={(e) => setHeight(e.target.value)}
              value={height}
              type="number"
              placeholder="Enter your height in centimeter."
              className="py-1 px-2 rounded-sm outline-none text-black text-[20px] "
            />
          </div>

          <div className="flex ">
            <button
              onClick={calcBMI}
              className="bg-green-500 rounded-md m-3 p-2 text-xl font-semibold"
            >
              Calculate
            </button>
            <button
              onClick={reloadBMI}
              className="bg-red-500 rounded-md m-3 p-2 text-xl font-semibold"
            >
              Reload
            </button>
          </div>

          {bmi && (
            <h1
              className={`text-2xl text-orange-500 font-semibold text-center mt-2 mb-2`}
            >
              You are : {message} ({Math.floor(bmi)})
            </h1>
          )}
        </div>
      </div>
      {/* <Input /> */}
    </>
  );
}

export default App
