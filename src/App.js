
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './components/Redux/store';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import HomePage from './components/Home/HomePage';
import Accessories from './components/Accessories/Accessories';
import Navbar from './components/navbar/Navbar';
import Beauty from './components/Beauty/Beauty';
import Dress  from './components/Women/Dress';
import Tops from './components/Women/Tops';
import Sandles from './components/Footwear/Sandles';
import Shoes from './components/Footwear/Shoes';
import Sleeper from './components/Footwear/Sleeper';
import Tshirts from './components/Men/Tshirts';

import Jeans from './components/Men/Jeans';
import Login from './components/navbar/Login';
import Register from './components/navbar/Register';
import ContactPage from './components/Footer/ContactPage';
import Cart from './components/navbar/Cart';
import Checkout from './components/navbar/Checkout';
import SellWithUs from './components/Footer/SellWithUs';
import Shipping from './components/Footer/Shipping';
import DesignStudio from './components/DesignStudio/DesignStudio';
import Chatbot from './components/FashionChatbot/Chatbot';
function App() {
  return (
    <Router>
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route element={<MainLayout />}>
          {/* Nested Routes inside MainLayout */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/dress" element={<Dress />} />
          <Route path="/tops" element={<Tops />} />
          <Route path="/sandal" element={<Sandles />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/slippers" element={<Sleeper />} />
          <Route path="/shirts" element={<Tshirts />} />
          <Route path="/jeans" element={<Jeans/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/sellwithus" element={<SellWithUs/>} />
          <Route path="/shipping" element={<Shipping/>} />
          <Route path="/designstudio" element={<DesignStudio/>} />
          <Route path="/chatbot" element={<Chatbot/>} />
        </Route>
      </Routes>
      </Provider>
    </Router>
  );
}

const MainLayout = () => (
  <>
    <Navbar />
    <Outlet /> 
  </>
);

export default App;
