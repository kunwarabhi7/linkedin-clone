import { Route,Routes } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { selectUser } from '../features/userSlice';
import Feed from '../components/Feed/Feed';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import SignUp from './SignUp';
import SignIn from './SignIn';


const Home = () => {

  <Routes>
    
    <Route path="/signup" element={<SignUp />} />

  </Routes>

  const user = useSelector(selectUser);
    const sideBar = useSelector(state => state.sideBar);
  return (
    <div className="bg-[#f3f2ef] flex flex-col ">
     {/*Header */}

{!user ?  <SignIn /> : ( 
     <>
     <Header />
     <div className='flex flex-row m-8'>
      <SideBar />
     <Feed />
     </div>
     </>
)}
{/*SideBar */}
{/*Feed */}
{/*app body */}
{/*Widgets */}
    </div>

  );
}

export default Home;
