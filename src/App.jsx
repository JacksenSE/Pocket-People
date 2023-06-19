import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./components/Home"
import About from "./pages/about"
import Books from "./pages/books"
import Contact from "./pages/contact"
import Products from "./pages/products"
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/books' element={<Books/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/products' element={<Products/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App