import './App.css';
import AboutUs from './pages/aboutus';
import Auth from './pages/auth';
import HomePage from './pages/homepage';
import LandingPage from './pages/landingpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/services';
import AdminPage from './pages/adminpage';
import CreateProduct from './pages/adminpage/createproduct';
import Displayuser from './pages/adminpage/displayuser';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import authapi from './services/authAPI'
import NotFound from './pages/notfound';

function App() {
  const [isAdmin, setIsAdmin] = useState(false); // Set this based on your authentication logic
  useEffect(() => {
    checkAccess()
  }, [isAdmin]);

  const checkAccess =async () => {
    const check=await authapi.isperms()
    console.log(check)
    if(check){
      setIsAdmin(true)
    }
    else{
      setIsAdmin(false)
    }

  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
       
    {isAdmin &&  <Route path='/admin/*' element={<AdminPage />}>
    </Route>
}
<Route path="*" element={<NotFound/>}/>

      </Routes>
    </Router>
  );
}

export default App;
