// src/pages/States.jsx
import React, { useState } from 'react'

const States = () => {


// Counter App using useState
      const [count,setCount]=useState(0)
      const increment =()=> setCount (count+1)
      const decrement =()=> setCount (count-1)

// form handling using useState
      const [email,setEmail]=useState('')
      const [password,setPassword]=useState('')

      const [submittedEmail,setSubmittedEmail]=useState('')
      const [submittedPassword,setSubmittedPassword]=useState('')
      const handelGo=(e)=>{

        console.log("Email is:",email)
        console.log("Password is:",password)
        e.preventDefault();
        
        setSubmittedEmail(email);
        setSubmittedPassword(password);

        setEmail('');
        setPassword('');
      }






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
    
    <section id='LoginForm' className='m-12'>
      
      <h2>A common use case for useState is managing form inputs.</h2>

      <input type="email" value={email} placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" value={password} placeholder='your password' onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handelGo}>GO</button>
      <h2>Your email is:{submittedEmail} </h2>
      <h2>Your password is:{submittedPassword} </h2>


    </section>


    

    </>
  )
}

export default States
