import { Route,Routes } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import ProtectedRoute from './Pages/ProtectedRoute';


const App = () => {
      return (
      <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/feed" element={<ProtectedRoute><Home /></ProtectedRoute> } />
  
    </Routes>
    );
    
}

export default App;
