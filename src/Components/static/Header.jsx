import React from 'react'

const Header = () => {
  return (
    <nav className="flex justify-between items-center py-4 bg-gray-800">
      <div className="flex items-center">
        <a href="#" className="text-lg font-bold text-white hover:text-gray-200">
          X-Movies
        </a>
      </div>
      <ul className="flex items-center">
        <li className="mr-6">
          <a href="#" className="text-gray-200 hover:text-white">
            Home
          </a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-gray-200 hover:text-white">
            About
          </a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-gray-200 hover:text-white">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Header