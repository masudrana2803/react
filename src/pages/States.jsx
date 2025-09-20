// src/pages/States.jsx
import React, { useState } from 'react'

const States = () => {

      const [count,setCount]=useState(0)


      const increment =()=> setCount (count+1)
      const decrement =()=> setCount (count-1)




  return (
    <>
    <section id='Counter' className='m-[20px] flex flex-col justify-center items-center'>
      <h2 className='text-2xl font-bold' >Counter App</h2>
      <div>
      <h2>We will learn the state from here</h2>
      <h2>Counter</h2>
      </div>
      <div>
        <p>Current Count:{count} </p>
        <div className='flex gap-5'>
        <button className='max-w-full text-[20px] bg-green-100 rounded-4xl p-2 active:scale-2 duration-1000' onClick={increment}>Increment</button>
        <button className='max-w-full text-[20px] bg-red-100 rounded-4xl p-2 active:scale-2 duration-1000' onClick={decrement}>Decrement</button>
        </div>
      </div>
    </section>
    
    <section id='Login Form' className='m-12'>
      <h2>A common use case for useState is managing form inputs.</h2>

      <input type="email" placeholder='Enter your email' />
      <input type="password" placeholder='Enter your password' />
      <button className=''>Submit</button>


    </section>


    </>
  )
}

export default States
