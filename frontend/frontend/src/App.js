import './App.css';
import HomePage from './pages/homepage';
import LandingPage from './pages/landingpage';
import Login from './pages/login';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {
  return (

<Router>
  
  <Routes>
  <Route path="/home" element={<LandingPage />}/>
  {/* <Route path="/login" element={<LoginPage />}/> 
  <Route path="/register" element={<RegisterPage />}/> */}

  <Route path="/explore" element={<HomePage/>}/>
  {/* <Route path="*" element={<NotFound/>}/> */}

        </Routes>
       
</Router>
);
}

export default App;
