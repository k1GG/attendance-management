
import React, { useState} from 'react'
import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    const [activetab, setActivetab] = useState("Home")
    const [search, setSearch] =useState('');
    const navigate = useNavigate()
    const location =useLocation();

    useEffect(() => {
       if(location.pathname === '/'){
         setActivetab("Home")
       }
       else if(location.pathname === '/add'){
        setActivetab("AddStudent")
      }
      else if(location.pathname === '/about'){
        setActivetab("About")
      }
      else if(location.pathname === '/login'){
        setActivetab("Login")
      }

    },[location]);

    const handleSubmit = (e) =>{
      e.preventDefault();
      navigate(`/search?name=${search}`)
      setSearch("")
    }
    

  return (
    <div className='header'>
        <Link to='/'>
          <p className='logo'>Student App</p> 
            
        </Link>
        <div className='header-right'>
          <form onSubmit={handleSubmit} style={{display:"inline"}}>
            <input type='text'
            className='inputfield'
            placeholder='search name...'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            />
          </form>
        <Link to='/'>
          <p className={`${activetab === "Home" ? 'active' : ""}`} onClick= {() => setActivetab('Home')}>Home</p>    
        </Link>
        <Link to='/add'>
          <p className={`${activetab === "AddStudent" ? 'active' : ""}`} onClick= {() => setActivetab('AddStudent')}>Add Student</p>    
        </Link>
        <Link to='/about'>
          <p className={`${activetab === "About" ? 'active' : ""}`} onClick= {() => setActivetab('About')}>About</p>    
        </Link>
        <Link to='/login'>
          <p className={`${activetab === "Login" ? 'active' : ""}`} onClick= {() => setActivetab('Login')}>Login</p>    
        </Link>

         </div> 
    </div>
  )
}

export default Navbar