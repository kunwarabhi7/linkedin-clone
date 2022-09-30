import Feed from '../components/Feed/Feed';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';


const Home = () => {
  return (
    <div className="bg-[#f3f2ef] flex flex-col ">
     {/*Header */}


     
     <Header />
     <div className='flex flex-row m-8'>
      <SideBar />
     <Feed />
     </div>
     

{/*SideBar */}
{/*Feed */}
{/*app body */}
{/*Widgets */}
    </div>

  );
}

export default Home;
