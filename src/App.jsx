import { useState } from 'react'
import Layout from './components/Layout'
import Home from './components/Home'
import Shop from './components/Shop'
import Vendor from './components/Vendor'
import Blog from './components/Blog'
import Contact from './components/Contact'
import './App.css'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Register from './components/Register'
import Homepage from './components/Homepage'
import SinglePage from './components/SinglePage'



function App() {
 

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />} >
    <Route path='/' index element={<Home />} />
    <Route path='/shop' index element={<Shop />} />
    <Route path='/vendor' index element={<Vendor />} />
    <Route path='/blog' index element={<Blog />} />
    <Route path='/contact' index element={<Contact />} />
    <Route path='/register' index element={<Register />} />
    
    <Route path='/view' element={<Homepage />}></Route>
    <Route path='/singlecard/:id' element={<SinglePage/>}/>
    </Route>
   </Routes>
  </BrowserRouter>
  )
}


export default App
