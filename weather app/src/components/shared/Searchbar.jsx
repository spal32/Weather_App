import { Search } from 'lucide-react'
import React, { useState } from 'react'

const Searchbar = ({onSearch}) => {
const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(value.trim()){
            onSearch(value.trim());
            setValue("");
        }
    }
  return (
    <form onSubmit={handleSubmit}>
<div className='w-full flex items-center gap-3 justify-center'>
      

  <input type="search" value={value} required placeholder="Search" className='w-80 bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl' onChange={(e) => setValue(e.target.value)} />
  <button type='submit' className='bg-sky-200 flex items-center justify-center gap-1 rounded-lg px-2 py-2'><Search size={16} />Search</button>
    </div>
    </form>
    
  )
}

export default Searchbar




