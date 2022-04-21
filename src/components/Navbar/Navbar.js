import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

import {Purchases} from '../cardcontents/cardcontents'

function Navbar({number}) {
  return (
    <div className='nav' >
        <div className='container'>
            <div className='logo'>
                <Link to="/">
                    Store
                </Link>
            </div>
            <div className="card">
                <div className='slide-down'>
                        <Purchases/>
                </div>
                <NavLink to="card">
                    <img src='/image/icon-header.png' alt=''/>
                    <div className={`numberofitems ${number > 0 ?"" :"hide"}`}>
                        {number}
                    </div>
                </NavLink>
            </div>
        </div>
    </div>
   
  );
}

export default Navbar;
