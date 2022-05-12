import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import HeaderNav from './Pages/Shared/Header/Navbar';

function App() {
  return (
    <>
      <HeaderNav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </>
  );
}

export default App;
