import React from "react";
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from './pages/index';
import About from './pages/about';
import LoginPage from './pages/login';
import RequireAuth from "./services/RequireAuth";



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={
          <RequireAuth>
            <About />
          </RequireAuth>
        } />
      </Routes>

      <hr />

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

    </div>
  );
}
export default App;
