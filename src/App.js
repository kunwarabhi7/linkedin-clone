import { Route,Routes } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';


function App() {

  <Routes>
    
  
    <Route path="/" element={<Home/>} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/signin" element={<SignIn />} />

  </Routes>

    return (
  <Home />

  );
}

export default App;
