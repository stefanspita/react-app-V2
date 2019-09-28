import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import AboutUs from './pages/Aboutus';
import ContactUs from './pages/ContactUs';
import Product from './pages/Products';


function App() {
  return (
  <BrowserRouter>
    <div>
    <Header /> 
    <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/aboutus' component={AboutUs} />
      <Route path='/contact' component={ContactUs} />
      <Route path='/products' component={Product}/>
     <Footer/>
     </div>
  </BrowserRouter> 
  );
}

export default App;
