import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Favorites from './Components/Favorites/Favorites'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <div>
   <Navbar/>

   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
   </Routes>

   <Footer/>
    </div>
  )
}

export default App
