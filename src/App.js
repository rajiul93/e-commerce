import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './component/Cart/Cart';
import Dashboard from './component/Dashboard/Dashboard';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import Order from './component/Order/Order';
import Payment from './component/Payment/Payment';
import PrivateOutlet from './component/PrivatOutlete/PrivateOutlete';
import Product from './component/Product/Product';
import ProductContainer from './component/ProductContainer/ProductContainer';
import Profile from './component/Profile/Profile';
import Register from './component/Register/Register';
import Shipping from './component/Shipping/Shipping';
import AuthProvider from './context/AuthProvider';


function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product' element={<Product />} />
        <Route path="/ProductContainer/:id" element={<ProductContainer />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Cart' element={<Cart />} />

        <Route path='/' element={<PrivateOutlet />}>

          <Route path='Profile' element={<Profile />} />
          <Route path='payment' element={<Payment />} />
          <Route path='Dashboard' element={<Dashboard />} />
          <Route path="Shipping" element={<Shipping />} />
          <Route path="Order" element={<Order />} />

        </Route>
        <Route path='/*' element={<NotFound />} />

      </Routes>
    </AuthProvider>


  );
}

export default App;
