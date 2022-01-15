import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './Pages/Admin/Admin';
import AboutUs from './Pages/AboutUs/AboutUs';
import AddEmployee from './Components/AddEmployee';
import App from './Pages/Home/App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }>
        </Route>
        <Route exact path="/admin" element={<Admin />}/>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')

);

reportWebVitals();

