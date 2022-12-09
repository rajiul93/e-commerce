
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './component/Cart/Cart';
import Dashboard from './component/Dashboard/Dashboard';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import Product from './component/Product/Product';
import ProductContainer from './component/ProductContainer/ProductContainer';
import Profile from './component/Profile/Profile';


function App() {
  return (
    <Routes className="App">
    
    
      
      <Route path='/'          element={<Home />} />
      <Route path='/Product'   element={<Product />} />
      <Route path="/ProductContainer/:id"   element={<ProductContainer />} />

      <Route path='/Login'     element={<Login />} />
      <Route path='/Cart'      element={<Cart />} />
      <Route path='/Login'     element={<Login />} />
      <Route path='/Profile'   element={<Profile />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/*'         element={<NotFound />} />

      
    </Routes>
   
  );
}

export default App;
