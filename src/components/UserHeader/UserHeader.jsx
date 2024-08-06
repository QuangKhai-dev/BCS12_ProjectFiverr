import React from 'react'
import { Link } from 'react-router-dom'
import LogoIcon from '../Icon/LogoIcon'
import { path } from '../../common/path'

const UserHeader = () => {
  return (
    <header className='py-5'>
      <div className="container">
        <div className="header_content flex items-center justify-between">
          <div className="header_logo">
            <Link to={path.homePage}>
              <LogoIcon />
            </Link>
          </div>
          <nav className="header_navigate space-x-5">
            <Link to={path.signIn} className='py-2 px-4 rounded-md hover:bg-gray-200 duration-300'>sign in</Link>
            <Link to={path.signUp} className='py-2 px-4 text-green-500 border border-green-500 rounded-md hover:bg-green-500 duration-300 hover:text-white '>Join</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default UserHeader

// UseFormik và yup
// query param trong react
// test tốc độ gõ phím ==> 65 trở lên là oke