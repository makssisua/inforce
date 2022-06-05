import './App.css';
import { ProductList } from './components/ProductList/ProductList';
import { Route, Routes } from "react-router-dom";
import { ProductPage } from './components/ProductPage/ProductPage'

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<ProductList />}/>
          <Route path='/:id' element={<ProductPage />}/>
          <Route path="*" element={<ProductList />}/>
        </Routes>
    </div>
  );
}

export default App;
