import { Route, Routes } from 'react-router-dom';

import './App.css';

import AddItems from './Pages/AddItems/AddItems';
import AddNewItem from './Pages/AddNewItem/AddNewItem';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import ManageItems from './Pages/ManageItems/ManageItems';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';
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
<Route path='/blog' element={<Blog></Blog>}></Route>
<Route path='/inventory' element={<RequireAuth>  <Inventory></Inventory></RequireAuth>}></Route>
<Route path='/inventory/:id' element={<RequireAuth>  <Inventory></Inventory></RequireAuth>}></Route>
<Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>
<Route path='/addNewItem' element={<AddNewItem></AddNewItem>}></Route>
<Route path='/myItems' element={<MyItems></MyItems>}></Route>
<Route path='/addItems' element={<AddItems></AddItems>}></Route>
<Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
    
      <Footer></Footer>
    </div>
  );
}

export default App;
