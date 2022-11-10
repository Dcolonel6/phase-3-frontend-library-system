import {  Routes, Route, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import NavBar from './Components/NavBar';
import Login from './Components/login/Login';
import BooksContainer from './Components/BookContainer/BooksContainer'
import BooksDetails from './Components/BookDetails/BooksDetails';
import Members from "./Components/Members/Members";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
  const user = sessionStorage.getItem("user");
  if (!user) {
    navigate("/");
  }
  
  }, [])
  
  return (
    <div className="container container-fluid">
      <div className="">
        <NavBar />
        <Routes>
          <Route path="/"  element={<Login/>} />
          <Route path="/books" exact element={<BooksContainer/>} />
          <Route path="/books/:id" exact element = {<BooksDetails/>} />
          <Route path="/members/" exact element = {<Members/>} />
          {/* <ProtectedRoute path="/books/:id" exact element={<BooksDetails/>}/> 
          <ProtectedRoute path="/members/" exact element={<Members/>}/>  */}
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
