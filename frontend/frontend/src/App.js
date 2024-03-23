import './App.css';
import Auth from './pages/auth';
import HomePage from './pages/homepage';
import LandingPage from './pages/landingpage';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {
  return (

<Router>
  
  <Routes>
  <Route path="/" element={<LandingPage />}/>
  {/* <Route path="/login" element={<LoginPage />}/> 
  <Route path="/register" element={<RegisterPage />}/> */}
<Route path="/auth" element={<Auth />}/>
  <Route path="/home" element={<HomePage/>}/>
  {/* <Route path="*" element={<NotFound/>}/> */}

        </Routes>
       
</Router>
);
}

export default App;
