import './App.css';
import List from './components/List';
import Login from './components/Login';
import Register from './components/Register';
import Addproduct from './components/Addproduct';
import Home from './HOME/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
