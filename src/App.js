
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Products from './Products';
import OneProduct from './OneProduct';

function App() {
  return (
    
     <div>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<OneProduct />} />
      </Routes>
      </BrowserRouter>
     </div>
  );
}

export default App;
