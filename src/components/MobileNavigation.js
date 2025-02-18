import React from 'react'
import { mobileNavigation } from '../content/navigation'
import { NavLink } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <section className='lg:hidden h-14 bg-black bg-opacity-60 fixed bottom-0 w-full backdrop-blur-2xl'>
      <div className='flex items-center justify-between h-full text-neutral-400 '>
          {
            mobileNavigation.map((nav, index) => {
              return (
                <NavLink
                    key={nav.label+"mobilenavigation"}
                    to={nav.href}
                    className={({isActive})=> `px-3 flex items-center h-full flex-col justify-center ${isActive && "text-white"} `}
                >
                  <div className='text-2xl'>
                    {nav.icon}
                  </div>
                  <p className='text-sm'>{nav.label}</p>
                </NavLink>
              )
            })
          }
      </div>
    </section>
  )
}

export default MobileNavigation