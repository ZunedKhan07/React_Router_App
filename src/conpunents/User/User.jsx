import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams();
  return (
    <div className='bg-emerald-600 text-slate-50 font-bold justify-center items-center flex py-6 m-14 rounded'>
      User:{userid}
    </div>
  )
}

export default User
