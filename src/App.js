
import { useSelector} from 'react-redux';
import { selectUser } from './features/userSlice';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Login from './components/Login/Login';


function App() {
  const user = useSelector(selectUser);
    const sideBar = useSelector(state => state.sideBar);
  return (
    <div className="bg-[#f3f2ef] flex flex-col ">
     {/*Header */}

{!user ?  <Login /> : ( 
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

export default App;
