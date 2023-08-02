// App.js
import './App.css';
import Shoes from './pages/shoes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './pages/nav';
import Home from './pages/Home';
import Search from './pages/Search';
import Details from './pages/Details';
import Women from './pages/Women';
import Login from './pages/Login';
import All from './pages/All';

function App() {
  return (
   <>
   
    
    <div className="App">
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search/:searchtext" element={<Search />} /> 
          <Route path="/Details/:productid" element={<Details/>}/>
          <Route path="/Men" element={<Shoes />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/All" element={<All/>} />


          <Route path="/*" element={<h1>error</h1>} />

        </Routes></Router>
    </div>
    </>
  );
}

export default App;
