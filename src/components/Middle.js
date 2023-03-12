import React from 'react'

const Middle = () => {
    return (
        <div className='max-[500px]:hidden'>
            <div className='my-20 text-gray-500 font-bold text-lg mx-auto w-[60%]'>
                <ul className=' flex justify-around '>
                    <li className='hover:underline decoration-slate-400 underline-offset-8 '>View All</li>
                    <li className='hover:underline decoration-slate-400 underline-offset-8 '>NFT</li>
                    <li className='hover:underline decoration-slate-400 underline-offset-8 '>BlockChain</li>
                    <li className='hover:underline decoration-slate-400 underline-offset-8 '>BitCoin</li>
                    <li className='hover:underline decoration-slate-400 underline-offset-8 '>DAO</li>
                    <li className='hover:underline decoration-slate-400 underline-offset-8 '>DeFi</li>
                </ul>
            </div>
        </div>
    )
}

export default Middle
