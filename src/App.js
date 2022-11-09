import {  Routes, Route, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import NavBar from './Components/NavBar';
import Login from './Components/login/Login';
import BooksContainer from './Components/BooksContainer'
import BooksDetails from './Components/BooksDetails';
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
  const user = sessionStorage.getItem("user");
  if (!user) {
    // navigate("/");
  }
  
  }, [])
  
  return (
    <div className="container container-fluid">
      <div className="">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/books" exact element={<BooksContainer/>} />
          <Route path="/books/:id" exact element={<BooksDetails/>}/>         
        </Routes>
      </div>
    </div>
  );
}

export default App;
