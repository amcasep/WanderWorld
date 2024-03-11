import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Destinations from './Components/Destinations/Destinations'
import Favorites from './Components/Favorites/Favorites'
import Footer from './Components/Footer/Footer'
import DestinationDetails from './Components/DestinationDetails/DestinationDetails'
import EditDestinationPage from './Components/EditDestinationPage/EditDestinationPage'
import AddDestinationPage from './Components/AddDestinationPage/AddDestinationPage'

function App() {


  return (
    <div>
   <Navbar/>

   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/destinations' element={  <Destinations /> } />
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path='/destinations/:destinationId' element={  <DestinationDetails /> } />
      <Route path="/destinations/:destinationId/edit" element={ <EditDestinationPage /> } />
      <Route path="/destinations/add" element={ <AddDestinationPage /> } />
   </Routes>

   <Footer/>
    </div>
  )
}

export default App
