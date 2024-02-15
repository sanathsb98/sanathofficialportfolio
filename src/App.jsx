import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import MyProjects from './components/myprojects/MyProjects';


function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/myprojects' element={<MyProjects/>}/>
     
 
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
