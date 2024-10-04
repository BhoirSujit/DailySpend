import React, { Children } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'

const UserLayout = ({children, title}) => {
  return (
    <div>
      <Header/>
      <div className="grid grid-cols-1-fr">
      <Sidebar/>
      <Main title={title}>
        <div className='mt-4'>
          {children}
        </div>
        
      </Main>
      </div>
      
    </div>
  )
}

export default UserLayout
