import React from "react";
import Navigation from '../../Components/Navigation';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Leftpanel from '../../Components/Leftpanel';
import Rightpanel from '../../Components/Rightpanel';

let App = () => {
  return(
    <>
        <Navigation />
        <Header />
        <div className="container">
          <hr/>
          <div className="row">
            <Leftpanel />
            <div className="col-6">
              This Application is to manage the employee data within the organization. This Application is to manage the employee data within the organization. 
              This Application is to manage the employee data within the organization. 
            </div>
            <Rightpanel />
          </div>
          </div>      
        <Footer />
    </>
  );
}

export default App;