import './App.css';
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import AboutUs from './Components/Landingpage/AboutUs';
import ContactUs from './Components/Landingpage/ContactUs';
import Landingpage from './Components/Landingpage/Landingpage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Landingpage/>} />
          <Route exact path='/aboutus' element={<AboutUs/>} />
          <Route exact path='/contactus' element={<ContactUs/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/signup' element={<Signup/>} />

        </Routes>
      </Router>
   </>
  );
}

export default App;
