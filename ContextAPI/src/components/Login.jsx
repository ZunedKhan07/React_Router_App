import {useContext, useState } from 'react';

import React from 'react'
import UserContext from '../context/UserContext';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div className='flex justify-center mt-44 bg-emerald-900 p-8 flex-col rounded '>
        <h2 className='flex justify-center items-center text-2xl m-2'>Login</h2>
        <input required:true className='bg-emerald-50 outline-none border-2 m-2 rounded w-full placeholder-gray-7 ' type='text'
        value={username} 
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input required:true className='bg-emerald-50 m-2 outline-none border-2 rounded w-full placeholder-gray-7' type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button className='bg-emerald-600 p-2 m-2 rounded w-full placeholder-gray-7' onClick={handleSubmit}>Submit</button>
    </div>
  )
}
export default Login
