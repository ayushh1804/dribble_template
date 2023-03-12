import React from 'react'
import temp from "../assets/temp.jpg"
const Landing = () => {
  return (
    <section className='grid md:grid-cols-2  w-full '>


      {/* 1st  */}
      <div className='md:col-span-1 row-span-2'>
        <div className='max-[450px]:flex  border-2  border-black p-4 rounded-2xl mt-10 mx-10'>

          <div>
            <img src={temp} className='h-60 md:h-full rounded-tl-2xl rounded-bl-2xl' alt="" />
          </div>
          <div className='mx-4'>
            <div><p className='text-gray-400'>12 dec 2022 ✦ 23 Saves  </p></div>
            <div><p className='font-bold text-lg my-4'>Bitcoin is an innovative payment network</p></div>
            <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem, ipsum dolor.</p></div>
            <div><button className=' mt-5  bg-gradient-to-r from-purple-700 to-blue-400 rounded-2xl p-3 hover:font-bold' >Follow Category</button></div>
          </div>
        </div>
      </div>


      {/* 2nd */}


      <div className=''>
        <div className='flex border-2  border-black p-4 rounded-2xl mt-10  mx-10'>

          <div>
            <img src={temp} className='h-60 rounded-tl-2xl rounded-bl-2xl' alt="" />
          </div>
          <div className='mx-4'>
            <div><p className='text-gray-400'>12 dec 2022 ✦ 23 Saves  </p></div>
            <div><p className='font-bold text-lg my-4'>Bitcoin is an innovative payment network</p></div>
            <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem, ipsum dolor.</p></div>
            <div><button className='text-gray-500 mt-5 border-gray-600 border rounded-2xl p-2 hover:font-bold' >Unfollow Category</button></div>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='flex border-2  border-black p-4 rounded-2xl mt-10  mx-10'>

          <div>
            <img src={temp} className='h-60 rounded-tl-2xl rounded-bl-2xl' alt="" />
          </div>
          <div className='mx-4'>
            <div><p className='text-gray-400'>12 dec 2022 ✦ 23 Saves  </p></div>
            <div><p className='font-bold text-lg my-4'>Bitcoin is an innovative payment network</p></div>
            <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem, ipsum dolor.</p></div>
            <div><button className='bg-gradient-to-r from-purple-700 to-blue-400 mt-5  border rounded-2xl p-2 hover:font-bold' >Follow Category</button></div>
          </div>
        </div>
      </div>

      {/* 3rd */}
{/* 
      <div className=''>
        <div className='flex border-2 border-black p-4 rounded-2xl mb-5  mx-10'>

          <div>
            <img src={temp} className='h-60 rounded-tl-2xl rounded-bl-2xl' alt="" />
          </div>
          <div className='mx-4'>
            <div><p className='text-gray-400'>12 dec 2022 ✦ 23 Saves  </p></div>
            <div><p className='font-bold text-lg my-4'>Bitcoin is an innovative payment network</p></div>
            <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem, ipsum dolor.</p></div>
            <div><button className=' mt-5  bg-gradient-to-r from-purple-700 to-blue-400 rounded-2xl p-2' >Follow Category</button></div>
          </div>
        </div>
      </div> */}
    </section >
  )
}

export default Landing
