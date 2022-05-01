import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Blogs from './pages/Blogs/Blogs';
import InventoryDetail from './pages/InventoryDetail/InventoryDetail';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import AddInventory from './pages/AddInventory/AddInventory';
import ManageItem from './pages/ManageItem/ManageItem';
import MyItems from './pages/MyItems/MyItems';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>
        }></Route>
        <Route path='/addinventory' element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        }></Route>
        <Route path='/manageitem' element={
          <RequireAuth>
            <ManageItem></ManageItem>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
