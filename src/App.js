import './App.css';
import React from 'react';
import Dashboard from './Page/Dashboard';
import Header from './Page/Dashboard/Header';
import Start_page from './Page/Start_page';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const newLocal = "/StartPage";
  return (
    <><div>
      <Start_page/>
      <Dashboard/>

    {/* </div><div>
        <BrowserRouter>
          <Route>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/StartPage" element={<Start_page />} /> */}
            {/* <Route path="/StudentDashboard" element={<StudentDashboard />} />
    <Route path="/AdminDashboard/*" element={<AdminPanel />} />
    <Route path="/ForgotPassword" element={<ForgotPassword />} /> */}


{/* 
          </Route>
        </BrowserRouter> */}
      </div>
      </>
   
  );
}

export default App;
