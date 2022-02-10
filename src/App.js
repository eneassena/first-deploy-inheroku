import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/index';
import About from './pages/about';
import LoginPage from './pages/login';
import RequireAuth from "./services/RequireAuth";
import Contato from "./pages/contato";
import Layout from './pages/Layout';
import { Logout } from "./pages/Logout";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contato" element={
            <RequireAuth>
              <Contato />
            </RequireAuth>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/about" element={
            <RequireAuth>
              <About />
            </RequireAuth>
          } />
          <Route path={'*'} element={<h1>Not Found 404</h1>} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
