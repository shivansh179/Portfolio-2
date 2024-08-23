 import Navbar from './Components/Navbar';
import Left from './Components/Left';


function App() {
  return (
    <div className='bg-gray-800 h-fit flex flex-col md:flex-row'>

        {/* <FirstPage/> */}
        <div className='h-fit'>
          <Left/>
        </div>
        <Navbar/>
    
      </div>
  );
}

export default App;
