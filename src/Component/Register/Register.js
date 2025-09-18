import { useNavigate } from 'react-router-dom';
import './Register.css';
import { useState } from 'react';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/");

  }
  const navigateToLogin = () => {
    navigate("/login");
  }
  const navigateToRegister = () => {
    navigate("/register")
  }
  const navigateToTitle=()=>{
    navigate("/title")
  }
    const navigateToCreateNewPost=()=>{
    navigate("/createnewpost")
  }

  const [userdata,setUserData]=useState({name:"",email:"",password:""});

  function handleNameChange(event) {
     let user={...userdata}
    user["name"]=event.target.value;
    setUserData(user)

  }
function handleEmailChange(event) {
  let user={...userdata}
    user["email"]=event.target.value;
    setUserData(user)

  }function handlePasswordChange(event) {
      let user={...userdata}
    user["password"]=event.target.value;
    setUserData(user)
  }
  
function handleRegister(event) {
  event.preventDefault();

  localStorage.setItem("user", JSON.stringify(userdata)); 
    alert("Registeration Successful! Now login.");


    navigate("/login")
  
  axios.post('http://localhost:3001/users', userdata)
    .then(response => {
      console.log('User registered:', response.data);
    })
    .catch(error => {
      console.error('Request failed:', error.message);
    });


}

  return (
    <div className='mainSectionOfRegisterationPage'>
      <div className='headerSectionOfRegisterationPage'>
        <div className='leftSectionTitle' onClick={navigateToDashboard}>Blogs</div>
        <div className='loginAndRegisterSection'>
          <div className='rightSectionTitles' onClick={navigateToLogin}>Login</div>
          <div className='rightSectionTitles' onClick={navigateToRegister}>Register</div>

        </div>

      </div>
      <div className='registrationBox'>
        <div className='titleOfRegisterationPage'>Blogs</div>
        <div className='subTitleOfRegisterationPage'>Public your passions,your way...</div>
        <hr/>
        <div className='titleRegister'>Register</div>
        <div><label className='labelsOfInputFields'>Name</label></div>
        <div> <input type='text' placeholder='Firstname Lastname' className='placeholderFieldOfRegisterPage' value={userdata.name}
       onChange={ (e) => setUserData({ ...userdata, name: e.target.value })}
         /></div>
        
        <div><label className='labelsOfInputFields'>Email id</label></div>
        <div><input type='email' placeholder='test@gmail.com' className='placeholderFieldOfRegisterPage' value={userdata.email} 
        onChange={(e) =>
          setUserData({ ...userdata, email: e.target.value })}></input></div>
        <div><label className='labelsOfInputFields'>Password</label></div>
        <div><input type='password' placeholder='Test@123' className='placeholderFieldOfRegisterPage' value={userdata.password}
         onChange={(e) =>
          setUserData({ ...userdata, password: e.target.value })}></input></div>

        <div className='btnSectionOfRegisterationPage'><button className='btnRegister' onClick={handleRegister} >Register</button></div>

      </div>
      <div><footer className='footerNote'>Copyright <i class="fa fa-copyright" aria-hidden="true"></i>2022</footer></div>
      

    </div>
  )
}
export default Register;