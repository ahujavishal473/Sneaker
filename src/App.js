// App.js
import './App.css';
import Shoes from './pages/shoes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './pages/nav';
import Home from './pages/Home';
import Details from './pages/Details';
import Women from './pages/Women';
import All from './pages/All';
import Cart from './pages/Cart';
import Footer from './pages/Footer';
import Signup from './pages/signup';
import SignIn from './pages/signin';
function App() {
  
  return (
   <>
   
    
    <div className="App">
      <Router>
      <Nav />
    
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/Details/:productid" element={<Details/>}/>
          <Route path="/Men" element={<Shoes />} />
          <Route path="/Women" element={<Women />} />
        
          <Route path="/All" element={<All/>} />
          
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<SignIn/>} />





          <Route path="/Cart" element={<Cart/>} />


          <Route path="/*" element={<h1>error</h1>} />

        </Routes>
        <Footer /></Router>
    </div>
  
    </>
  );
}

export default App;

