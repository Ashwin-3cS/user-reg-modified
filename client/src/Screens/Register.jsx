import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

function Register() {

  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  const handleSubmit = async(e) => {
      e.preventDefault()
      await axios.post('http://localhost:3001/api/users/', {name, email, password})
      .then(res => console.log(res))
      .catch(err => console.log(err))

  }

  return (
    <form className='flex flex-col justify-center items-center my-[30px]' onSubmit={handleSubmit}>
        <p className='font-bold text-3xl py-[30px]'>Register Form</p>
        <div className='space-y-4'>
        <div className='flex flex-col'>
          <label htmlFor='name'>Name</label>
          <input type="text" name="Name" id="name" className='border-black border-[1px] my-[5px] rounded-md p-[5px]' onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='email'>E-mail ID</label>
          <input type="email" name="email" id="email" className='border-black border-[1px] my-[5px] rounded-md p-[5px]' onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='password'>Password</label>
          <input type="password" name="password" id="password" className='border-black border-[1px] my-[5px] rounded-md p-[5px]' onChange={(e) => setPassword(e.target.value)}/>
        </div>
        </div>
        <button type="submit" className='w-[200px] bg-blue-500 text-white p-[10px] my-[30px] rounded-md hover:bg-blue-600'>Register Me</button>
        <Link to="/login" className="hover:underline">Already Registered?</Link>
    </form>
  )
}

export default Register