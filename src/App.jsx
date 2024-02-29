import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Middle from './Components/Middle/Middle'
import Destinations from './Components/Destinations/Destinations'
import Portfolio from './Components/Portfolio/Portfolio'
import Reviews from './Components/Reviews/Reviews'
import Questions from './Components/Questions/Questions'

function App() {


  return (
    <div>
   <Navbar/>
   <Home/>
   <Middle/>
   <Destinations/>
   <Portfolio/>
   <Reviews/>
   <Questions/>
    </div>
  )
}

export default App
