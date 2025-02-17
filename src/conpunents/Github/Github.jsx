import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData] = useState([]); 
         useEffect(() => {
         fetch('https://github.com/ZunedKhan07')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    }, [])
  return (
    <div className='text-center m-4 bg-emerald-800 p-4 text-white text-3xl'>
      Github Followers: {data.follwers}
      <img src= {data.avatar_url} alt="Git Pic" width={300} />
    </div>
  )
}

export default Github
