import React, { useContext } from 'react'
import {UserContext} from "./UserContext";
import {Link} from "react-router-dom"
function Header() {
  const {user}=useContext(UserContext);
  return (
    <div>
    <header className="flex  justify-between  ">
      <a href="Logo" className="flex  gap-1 items-center px-5 ">
        <img
          src="https://wanderlust.com/wp-content/uploads/2022/01/WL_Logo_Grey-05.png"
          alt=""
          srcSet=""
          className="h-8 w-8"
        />
        <span className=" text-xl font-bold text-rose-500">Wander Lust</span>
      </a>
      <div className="flex border border-gray-400 rounded-full mt-6 h-11  text-center py-2 px-4  gap-2 shadow-md shadow-gray-300 ml-32">
        <div>Anywhere |</div>
        <div>Anyweek |</div>
        <div>Add guests  </div>
        <button className="bg-rose-500 rounded-full w-7 h-7 px-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5  text-white "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
       <div className="flex mt-5 gap-4 ">
        
        <p className="font-semibold text-sm mt-1.5          ">Wander Lust your home</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 mt-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
        <Link to={'/Login'} className="flex border border-gray-400 rounded-full  h-11  text-center py-2 px-2  mr-12   ">

       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
             strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 bg-slate-200 rounded-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <div>{!!user && <div>{user.name}</div>}</div>
        </Link>  
      </div>
    </header>
    </div>
  )
}

export default Header