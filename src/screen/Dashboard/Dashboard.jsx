import React from 'react'
import SideBar from '../../Components/SideBar'
import Table from '../../Components/Table'
import Header from '../../Components/Header'
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const Dashboard = () => {
  return (
    <div>
      <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
        <SideBar />
        <div className="flex flex-col flex-1">
          <Header />
          <div className="flex-1 p-4 min-h-0 overflow-auto bg-[#FFFEF9]">
            <h1 className='text-[#1D242E80] text-4xl font-bold p-11'>Mess <span className='text-black'>List of Users (298)</span></h1>
           <div className="flex justify-end">
           <div className=" w-60 bg-white rounded-md border border-[#1D242E] p-2 mx-11">
              <h1 className='flex text-xl'>-Select Group- <MdKeyboardArrowDown className='ml-11 mt-1' /></h1>
            </div>
           </div>
            <Table />
            <div className="flex justify-end m-11 gap-4">
            <div className="w-11 bg-white rounded-md border border-gray-300 flex p-2 opacity-25">
              <MdKeyboardArrowLeft/>
            </div>
            <h1 className='flex text-xl'>Page 01  <MdKeyboardArrowDown className='pt-1 text-2xl'/></h1>
            <div className="w-11 bg-white rounded-md border border-gray-300 flex p-2">
              <MdKeyboardArrowRight/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard