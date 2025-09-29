import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2'

const Searchbar = () => {

    const [seatch, setSearchTerm] = useState("")
    const [isOpen,setIsOpen] = useState(false)

   const handelSearch = () =>{
    setIsOpen(!isOpen)
   }

   const handelSearchform = (e) =>{
    e.preventDefault();
    console.log("search term",seatch);
    setIsOpen(false)
    
   }
  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen?"absolute top-0 left-0 w-full bg-white h-24 z-50":"w-auto"}`} >
        {isOpen ? (<form onSubmit={handelSearchform} action="" className='relative flex items-center justify-center w-full' >
            <div className='relative w-1/2' >
                <input type="text" placeholder='search'
                 value={seatch} 
                 onChange={(e)=> setSearchTerm(e.target.value)}
                 className=' bg-gray-100 px-4 pt-2 pr-12 rounded-lg focus:outline-none w-full
                 placeholder:text-gray-100'
                 />
                 <button type='submit' className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800' >
                    <HiMagnifyingGlass className='h-6 w-6'/>
                 </button>
            </div>

            <button type='button'
            onClick={handelSearch}
             className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800' >
                <HiMiniXMark className='h-6 w-6 '/>
            </button>

        </form> ):(
            <button onClick={handelSearch} >
                <HiMagnifyingGlass className='h-6 w-6' />
            </button>
        )}
    </div>
  )
}

export default Searchbar