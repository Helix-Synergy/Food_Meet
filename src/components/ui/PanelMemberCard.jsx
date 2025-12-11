import React from 'react'

const PanelMemberCard = (item) => {
  return (
    <div className='flex flex-col p-2 items-center rounded-lg'>
        <div className="border-2 border-one rounded-full inline-block text-center">
      <img src={item.image} alt="ima" className='h-52 w-52 object-cover rounded-full m-2'/>
      </div>
      <h2 className='text-black font-bold text-lg'>{item.name}</h2>
      <p className='text-one text-md font-semibold'>{item.about}</p>
      <p>{item.from}</p>
    </div>
    // </div>
  )
}

export default PanelMemberCard

// import React from 'react';
// const PanelMemberCard = ({ name, from, image, about }) => {
//   return (
//     <div className="flex flex-col items-center bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300 text-center">
//       <div className="border-4 border-one rounded-full overflow-hidden w-40 h-40 mb-4">
//         <img
//           src={image}
//           alt={name}
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <h2 className="text-xl font-bold text-gray-800">{name}</h2>
//       <p className="text-green-600 font-medium text-sm mt-1">{about}</p>
//       <p className="text-gray-500 text-sm mt-1 italic">{from}</p>
//     </div>
//   );
// };
// export default PanelMemberCard;