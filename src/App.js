
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Products from './Products';
import ProductDetails from './ProductDetails';
import Navigation  from './navigationBar';

function App() {
  return (
    
     <div>
      <Navigation />
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails/>} />

      </Routes>
      </BrowserRouter>
     </div>
  );
}

export default App;
