import React from 'react'
import image1 from "../assets/blockchain.png"
const Navbar = () => {
  return (
    <>
      <div>
        <div className='bg-[#0C1E45]  text-white text-center p-3'>
          Blog is about...
        </div>
        <div className='flex justify-around mt-8'>
          <span className='md:hidden  mt-4 hover:cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z" /></svg></span>
          <span><img src={image1} alt="" className='w-16' /></span>

          <span className='flex max-[500px]:hidden justify-center  items-center text-center  '>
            
            <span className=''><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"></path></svg></span>
            <span className='mx-5 underline decoration-black'><input type="text" placeholder='Search...' /></span></span>

          <span className='flex'>
            <span> <button className='bg-[#0C1E45] hover:bg-[#1ec3b3] px-4 py-3 rounded-3xl text-white'> Subscribe</button></span>
            <span className='max-[500px]:hidden '> <button className=' border-2 border-[#0C1E45] text-[#0C1E45] hover:bg-[#a48dd2] px-6 py-2 rounded-3xl ml-5'> Join</button></span>
          </span>
        </div>
      </div>




    </>
  )
}

export default Navbar
