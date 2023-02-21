
import './App.scss'
import { Route, Routes } from "react-router-dom";
import About from './components/about';
import SingUp from './components/singUp';
import SingIn from "./components/singIn";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer} from 'react-toastify';
import MainPage from "./page/mainPage";
import ProtectedRoute from "./common/ProtectedRoute"


function App() {

  const isSignedIn = true;
  
  return (
  <>
    <div className="App"> 
        <div>
          <ToastContainer/>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/mainPage" element={<MainPage />} />
            <Route path="/" element={<SingUp />} />
            <Route path="/singIn" element={<SingIn />} />
            {/* <Route path="/singIn" element={<ProtectedRoute > <SingIn /></ProtectedRoute>} /> */}

          </Routes>
        </div>
    </div>
  </>
    
  );
}

export default App;
