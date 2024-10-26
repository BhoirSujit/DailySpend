import React, { Children} from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
import { useLocation } from 'react-router-dom'
import routeMap from '../utils/routeMap'

const UserLayout = () => {

  const location = useLocation();

  
  

  return (
    <div>
      <Header/>
      <div className="grid grid-cols-1-fr">
      <Sidebar/>
      <Main title={routeMap[location.pathname]}>
        <div className='mt-4'>
          <Outlet/>
        </div>
        
      </Main>
      </div>
      
    </div>
  )
}

export default UserLayout
