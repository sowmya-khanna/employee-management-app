import React from "react";
import {Link} from "react-router-dom";

let  Navigation = () => {
    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">bootstrap</a>

                <button type="button" className="navbar-toggler" data-bs-toggle="collapse"        data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/admin"> Admin </Link>
                        <li className="nav-item nav-link" to="/about-us"> Employee </li>
                        
                    </div>

                    <div className="navbar-nav ms-auto">
                        <a href="#" className="nav-item nav-link"> Contact Us </a>
                    </div>

                </div>
            </div>
        </nav> 
    );
}

export default Navigation; 