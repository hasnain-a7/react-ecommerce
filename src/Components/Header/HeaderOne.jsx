/* eslint-disable no-unused-vars */
import React from 'react'
import { Facebook,Instagram , Twitter, YouTube , Pinterest } from '@mui/icons-material';
const HeaderOne = () => {
  return (
    <div className="w-full h-auto sm:h-12 text-sm sm:text-md font-bold bg-slate-800 px-4 sm:px-8 py-2 sm:py-1 flex flex-wrap sm:flex-nowrap justify-between items-center text-white">
  <p className="text-center sm:text-left">Hasnain Store</p>
  <div className="flex justify-center sm:justify-between gap-4 sm:gap-2 mt-2 sm:mt-0">
  <a href="#" className="hover:text-gray-300">
                <Facebook size={24} />
              </a>
              <a href="#"  className="hover:text-gray-300">
                <Instagram size={24} />
              </a>
              <a href="#"  className="hover:text-gray-300">
                <Twitter size={24} />
              </a>
              <a href="#"  className="hover:text-gray-300">
                <YouTube size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Pinterest size={24} />
              </a>
  </div>
</div>

      
   
  )
}

export default HeaderOne
