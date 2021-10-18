import React from "react";
import { Link } from 'react-router-dom';

function HomePage(){

    

    return(
        <nav>
            <li><Link to="/counter" >Counter</Link></li>
            <li><Link to="/calculator" >Calculator</Link></li>
            <li><Link to="/clock" >Clock</Link></li>
            <li><Link to="/posts" >Posts</Link></li>
        </nav>
    )
}

export default HomePage