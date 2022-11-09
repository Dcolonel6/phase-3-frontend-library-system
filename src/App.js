import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import NavBar from './Components/NavBar';
import Login from './Components/Login';
import BooksContainer from './Components/BooksContainer'
import BooksDetails from './Components/BooksDetails';

function App() {
  return (
    <div className="container container-fluid">
      <BrowserRouter>
      <div className="">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/books" exact element={<BooksContainer/>} />
          <Route path="/books/:id" exact element={<BooksDetails/>}/>         
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
