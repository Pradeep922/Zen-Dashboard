import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Class from './Pages/Class'
import Dashboard from './Pages/Dashboard';
import Task from './Pages/Task';
import Webcode from './Pages/WebCode';
import Login from './Pages/Login';
import './App.css'

function App() {
  const user = localStorage.getItem('user');
  
  return (
    <>
    
    {/* <Login /> */}
    
    {user ? 
    <><Topbar /> 
    <Sidebar /></> : null}
    <Routes>
    
      <Route path="/class" element={<Class />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/task" element={<Task />} />
      <Route path="/webcode" element={<Webcode />} /> 
      <Route path="/" element={user ? <Class /> : <Login />} />
      
    </Routes>
    
    </>
  );
}

export default App;
