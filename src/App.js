import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="container container-fluid">
      <header className="App-header">
        <NavBar />        
      </header>
    </div>
  );
}

export default App;
