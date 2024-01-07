import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Swap from "./pages/Swap";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from './Layout';

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
    </Routes>

  );
};

export default App;
