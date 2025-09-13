
import './App.css';
import {  BrowserRouter as Router, Routes,Route  } from 'react-router-dom'; 
import Dashboard from './Component/Dashboard/Dashboard';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import CreateNewPost from './Component/CreateNewPost/CreateNewPost';
import Title from './Component/Title/Title';



function App() {
  return (
  <Router>
    <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/createnewpost' element={<CreateNewPost/>}/>
    <Route path='/title/:id?' element={<Title/>}/>
    
    </Routes>
    </Router>

  
  );
}

export default App;
