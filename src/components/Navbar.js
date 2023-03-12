import React from 'react'
import image1 from "../assets/blockchain.png"
const Navbar = () => {
  return (
    <div>
      <div className='bg-[#0C1E45]  text-white text-center p-3'>
        Blog is about...
      </div>
      <div className='flex justify-around mt-8'>
        <span className='mt-4 hover:cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z"/></svg></span>
        <span><img src={image1} alt="" className='w-16'/></span>
        <span> <button className='bg-[#0C1E45] hover:bg-[#1ec3b3] px-4 py-3 rounded-3xl text-white'> Subscribe</button></span>
      </div>
    </div>
  )
}

export default Navbar
