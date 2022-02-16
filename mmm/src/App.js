import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Erorr from './Components/Erorr';
import Home from './Components/Home';
import Profile from './Components/Profile';
import UserList from './Components/UserList';

function App() {
  return (
    <div className="App">
      <Link to='/'><h1>Home</h1></Link>
      <Link to='/user'><h1>User</h1></Link>

      <Routes> 
   <Route path='/' element={<Home/>}  />
    <Route path='/user' element={<UserList/>}  /> 
    <Route path='/user/profile/:id' element={<Profile/>}  />
    
   <Route path='*' element={<Erorr/>}  />

     </Routes>
    </div>
  );
}

export default App;
