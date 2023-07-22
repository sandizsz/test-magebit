
import './App.css';
import './dist/output.css';
import LOGO_IMAGE from './assets/logo_pineapple.svg';



function App() {
  return (
    <div className="flex">
      <div className="w-680 bg-gray-200 h-screen">
        <nav className="flex justify-center items-center max-w-520 w-full ">
          <div className="max-w-screen-lg flex flex-wrap justify-between  items-top ">
            <a href="#">
            <img src={LOGO_IMAGE} alt="site-logo" className="mr-4"/>
            </a>
          <ul className="flex">
            <li><a href="#">About</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          </div>
        </nav>


        <div className="max-w-sm hover:max-w-lg">
          <h1>Subscribe to Newsletter</h1>
          <p>Subscribe to our newsletter and get 10% discount on pineaple glasses.</p>

          <div>


          </div>
        </div>


        
      </div>

{/*rigt side div (background) */}

<div className="flex-1 h-screen bg-cover bg-no-repeat bg-center bg-red-500">
a
</div>
     
      
    


    </div>
  );
}

export default App;
