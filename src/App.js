import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route path="/" exact>
            <Login/>
          </Route>
          <Route path="/books/" exact>
            <BooksContainer />
          </Route> 
          <Route path="/books/:id" exact>
            <BooksDetails/>
          </Route>           
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
