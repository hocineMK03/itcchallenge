import React from 'react';
import '../../styles/admin/secondarynav.css';
import { Link, NavLink, Routes,Route } from 'react-router-dom'
import CreateProduct from './createproduct';
import Displayuser from './displayuser';
import Displayproduct from './displayproduct';
const SecondaryNav = () => {
  return (
    <div className='secondary-nav'>
        <ul>
            <li>
<NavLink to='/admin/createproduct'>Create Products</NavLink>
            </li>
            <li>

<NavLink to='/admin/displayproduct'>Display Products</NavLink>
            </li>
            <li>
<NavLink to='/admin/displayuser'>Display Users</NavLink>
            </li>
            <li>
            </li>
        </ul>
        <Routes>
        <Route path='/createproduct' element={<CreateProduct />}/>
<Route path='/displayproduct' element={<Displayproduct />}/>
<Route path='/displayuser' element={<Displayuser />}/>

        </Routes>
    </div>



  );
};

export default SecondaryNav;
