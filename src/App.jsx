import './App.css'
import ButtonsContainer from './Components/ButtonsContainer'
import Footer from './Components/Footer'
import SideBar from './Components/SideBar'

function App() {
  

  return (
    <div className='app_container' >
    <div className="App">
    <SideBar/>
    <ButtonsContainer/>
    </div>
    <Footer/>
    </div>
  )
}

export default App
