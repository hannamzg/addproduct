
import './App.scss'
import { Route, Routes } from "react-router-dom";
import About from './components/about';
import SingUp from './components/singUp'




function App() {

  
 
  return (
  <>
    <div className="App">
        <div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<SingUp />} />
          </Routes> 
        </div>
        
    </div>
  </>
    
  );
}

export default App;
