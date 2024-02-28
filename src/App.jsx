import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from '../../travel app/src/Components/Home/Home'
import Middle from './Components/Middle/Middle'
import Destinations from './Components/Destinations/Destinations'
import Portfolio from './Components/Portfolio/Portfolio'
import Reviews from './Components/Reviews/Reviews'

function App() {


  return (
    <div>
   <Navbar/>
   <Home/>
   <Middle/>
   <Destinations/>
   <Portfolio/>
   <Reviews/>
    </div>
  )
}

export default App
