import React, { useState } from "react";
import {  Routes, Route, Navigate } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Events from "./Pages/Events";
import Team from "./Pages/Team";
import Exhibit from "./Pages/Exhibit";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import Dashboard from "./Pages/Dashboard";
import News from "./Pages/News";
import ExhibitDetails from "./Pages/ExhibitDetails";
import Loader from "./components/Loader";
import { ToastContainer } from 'react-toastify';
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import RequestAccess from "./Pages/RequestAccess";
import RefrshHandler from "./RefrshHandler";




const App = () => {
 
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element})=>{
    return isAuthenticated ? element : <Navigate to="/login"/>
  }

  return (
    
      <>
         <RefrshHandler setIsAuthenticated={setIsAuthenticated}/>
        <ToastContainer />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/exhibit" element={<Exhibit />} />
          <Route path="/exhibit/:id" element={<ExhibitDetails />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/loader" element={<Loader />} />

              {/* Auth Routes */}
          <Route path="/request-access" element={<RequestAccess />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          
            {/* Protected Dashboard */}
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />

          {/* 404 Page */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </>
  );
};

export default App;