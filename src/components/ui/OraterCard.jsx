import React from 'react'

const OraterCard = (item) => {
  return (
    <div className='flex flex-col p-4 items-center rounded-lg'>
        <div className="border-2 border-one rounded-2xl inline-block">
      <img src={item.image} alt={item.image} className='h-52 w-52 object-cover rounded-2xl m-2'/>
      </div>
      <h2 className='text-black font-bold text-md'>{item.name}</h2>
      <p className='text-one text-md font-semibold'>{item.about}</p>
      <p>{item.from}</p>
    </div>
    // </div>
  )
}

export default OraterCard
