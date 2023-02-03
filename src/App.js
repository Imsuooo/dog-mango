import './App.css';
import { React } from 'react';
import MainPage from './componenets/MainPage';
import {Route, Routes} from 'react-router-dom';
import ProductPage from './componenets/ProductPage';
import UploadPage from './componenets/UploadPage'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<MainPage/>}></Route>
        <Route path ="/productpage/:id" element={<ProductPage/>}></Route>
        <Route path ="/uploadpage" element={<UploadPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
