import logo from './logo.svg';
import './App.css';
import MyNavbar from './Components/Navbar/MyNavbar'
import Inscription from './Components/Inscription/Inscription'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div className="App">
     <MyNavbar/> 
     <Inscription/>
     <Footer/>
    </div>
  );
}

export default App;
