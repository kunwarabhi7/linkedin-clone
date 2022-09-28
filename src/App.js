
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="bg-[#f3f2ef] flex flex-col ">
     {/*Header */}
     <Header />
     {/*SideBar */}
     <div className='flex flex-row m-8'>
      <SideBar />
     </div>
     {/*Feed */}
     {/*app body */}
     {/*Widgets */}
    </div>
  );
}

export default App;
