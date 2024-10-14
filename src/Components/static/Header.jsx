import React from 'react'

function Home() {
  return (
    <nav className='bg-red-500'>
    <div className='h-[4rem] mx-[50px] flex items-center justify-between '>
        <a href="/" className="text-lg font-bold text-white  ms-[40px] hover:text-gray-200">
          X-Movies
        </a>
        <div className='bg-white h-[40px] border rounded flex items-center w-[17rem] gap-3'>
            <i className="fa-solid fa-magnifying-glass ms-3" ></i>
            <input placeholder='Search for movies' type='search' className='border-none focus:outline-none' />
        </div>
        <ul className="flex items-center">
        <li className="mr-6">
          <a href="/home" className="text-gray-200 hover:text-white">
            Home
          </a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-gray-200 hover:text-white">
            About
          </a>
        </li>
        <li className="mr-6">
          <a href="/contact" className="text-gray-200 hover:text-white">
            Contact
          </a>
        </li>
        <li>
          <button className='text-gray-200 hover:text-white'>SignUp</button>
        </li>
      </ul>
      
    </div>
    </nav>
  )
}

<<<<<<< HEAD
export default Header;
=======
export default Home
>>>>>>> cd83a3de65475b04cce8fc9139ece4d318b4ad6b
