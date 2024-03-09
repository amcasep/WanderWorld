import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Destinations from './Components/Destinations/Destinations'
import Favorites from './Components/Favorites/Favorites'
import Footer from './Components/Footer/Footer'
import DestinationDetails from './Components/DestinationDetails/DestinationDetails'

function App() {


  return (
    <div>
   <Navbar/>

   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/destinations' element={  <Destinations /> } />
      <Route path='/destinations/:destinationId' element={  <DestinationDetails /> } />
      <Route path="/destinations/favorites" element={<Favorites/>}/>
   </Routes>

   <Footer/>
    </div>
  )
}

export default App
