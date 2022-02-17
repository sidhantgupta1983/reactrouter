import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () =>{
    return(
        <>
            <Link to='/home'>Home</Link>||
            <Link to='/contact'>Contact</Link>||
            <Link to='/support'>Support</Link>||
            <Link to='/team'>Team</Link>
        </>
        )    
}

export default Navbar