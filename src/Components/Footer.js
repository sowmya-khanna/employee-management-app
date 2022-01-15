import React from "react";

let Footer = () =>{
  return(
    <footer>
      <div className="row">
        <div className="col-md-6">
          <p>copyrights &copy; 2022 bootstrap</p>
        </div>
        <div className="col-md-6 text-md-end">
          <a href="#" className="text drak">terms of use</a>
          <span className="text-muted mx-2">/</span>
          <a href="#" className="text drak">privacy policy</a>
         </div>
      </div>
    </footer>    
    );
}

export default Footer;