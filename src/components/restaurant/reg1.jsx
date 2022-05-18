import React from 'react'

function Reg1() {
  return (
    <div className='w-[60%] flex flex-col items-center p-[3%]'>
        <div className="flex flex-col py-[5%] px-[6%] border-2">
            <h1 className="font-semibold text-left mt-4">Restaurant Information</h1>
            <input 
            className='px-3 mt-4 border-[1px] w-full outline-none py-1'
            type="text" placeholder='Restaurant Name' />
            <input 
            className='px-3 border-[1px] mt-4 w-full outline-none py-1'
            type="text" placeholder='Restaurant Complete Name' />
            <h1 className="font-semibold text-left mt-4">Contacts number of Restaurant</h1>
            <div className="flex px-2 border-[1px] mt-2 items-center">
                <p>250</p>
                <input
                    className='outline-none border-none px-3 py-1'
                 type="text" placeholder='Mobile Number' />
            </div>
            <h1 className="font-semibold text-left mt-4">Restaurant owner details</h1>
            <div className="flex px-2 border-[1px] mt-4 items-center">
                <p>250</p>
                <input
                    className='outline-none border-none px-3 py-1'
                 type="text" placeholder='Mobile Number' />
            </div>
            <div className="flex items-center w-full justify-between mt-4">
                <input className='px-3 w-[150px] border-[1px]  outline-none py-1'
                type="text" placeholder='Owner Name' />
                <input className='px-3 ml-4 border-[1px] w-full outline-none py-1'
                type="text" placeholder='Restaurant owner Email' />
            </div>
        </div>
    </div>
  )
}

export default Reg1