//import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from "react-icons/hi";

function Gstlist() {
  return (
    <>
      <main className="">
        <form className='ml-20 relative'>

            <h1 className='font-playfair pb-5 text-lg'><HiOutlineArrowLeft className='inline absolute top-1 right-[80rem] '/>Create Guest List</h1>
          
          <div className='pb-4'>
            <label className="block font-Inter text-sm pb-2" htmlFor="nog">Name of guest</label>
            <input type="text" placeholder="Enter name of guest" className="border-2 border-gray-300 p-2 rounded-md w-1/2" />
          </div>
          <div className='pb-4'>
            <label className="block font-Inter text-sm pb-2" htmlFor="no">Phone Number</label>
            <input type="text" name="no" placeholder="Enter phone number" className="border-2 border-gray-300 p-2 rounded-md w-1/2" />
          </div>
          <div className='pb-4'>
            <label className="block font-Inter text-sm pb-2" htmlFor="moa">Mode of attendance</label>
            <input type="text" name="moa" className="border-2 border-gray-300 p-2 rounded-md w-1/2" />
          </div>
          <div className='pb-4'>
            <label className="block font-Inter text-sm pb-2" htmlFor="SN">Seat Number</label>
            <input type="text" name="SN" className="border-2 border-gray-300 p-2 rounded-md w-1/2" />
          </div>
          <div className='pb-4'>
            <label className="block font-Inter text-sm pb-2" htmlFor="ID">Unique ID</label>
            <input type="text" name="ID" className="border-2 border-gray-300 p-2 rounded-md w-1/2" />
          </div>
          <button type='submit' className='bg-yellow-800 w-2/12 text-white text-sm py-3 rounded-md '>Add Guest</button>
          <Link to="/import-contact">
            <button type='button' className='bg-white w-2/12 text-yellow-800 border-2 border-yellow-700 text-sm py-3 m-6 rounded-lg'>
              Import Contact
            </button>
          </Link>

        </form>
      </main>
    </>
  );
}

export default Gstlist;
