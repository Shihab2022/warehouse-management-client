import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Footer from './Pages/Sheared/Footer';
import Header from './Pages/Sheared/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/home' element={<Home></Home>}></Route>
<Route path='/login' element={<Login></Login>}></Route>
<Route path='/register' element={<Register></Register>}></Route>


      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
