
import './App.css';
import Login from './Component/Login';
import { Routes,Route } from 'react-router-dom';
import Registration from './Component/Registration';
import DashBoard from './Component/DashBoard';
import Admin from './Component/Admin';

function App() {
  return (
    <div className="App">
     
     <Routes>
     <Route path='/' element={<Login />} />
     <Route path='/registraion' element={<Registration />} />
     <Route path='/dashboard' element={<DashBoard />} />
     <Route path='/admin' element={<Admin />} />
     
     </Routes>
    </div>
  );
}

export default App;
