// App.js
import { lazy } from 'react';
import './App.css';
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Shoes from './pages/shoes';
// import Nav from './pages/nav';
// import Home from './pages/Home'
// import Details from './pages/Details';
// import Women from './pages/Women';
// import All from './pages/All';
// import Cart from './pages/Cart';
// import Footer from './pages/Footer';
// import Signup from './pages/signup';
// import SignIn from './pages/signin';
const Shoes=lazy(()=>import('./pages/shoes'))
const Nav=lazy(()=>import('./pages/nav'))
const Details=lazy(()=>import('./pages/Details'))
const Home=lazy(()=>import('./pages/Home'))
const Women=lazy(()=>import('./pages/Women'))
const All=lazy(()=>import('./pages/All'))
const Cart=lazy(()=>import('./pages/Cart'))
const Footer=lazy(()=>import('./pages/Footer'))
const Signup=lazy(()=>import('./pages/signup'))
const SignIn=lazy(()=>import('./pages/signin'))


function App() {

  return (
    <>


      <div className="App">
        <Router>
          <Suspense fallback={<h1>Loading...........</h1>}>
            <Nav />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Details/:productid" element={<Details />} />
              <Route path="/Men" element={<Shoes />} />
              <Route path="/Women" element={<Women />} />
              <Route path="/All" element={<All />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/*" element={<h1>error</h1>} />

            </Routes>
            <Footer />
          </Suspense>
        </Router>
      </div>

    </>
  );
}

export default App;

