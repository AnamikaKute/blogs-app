import { useNavigate } from 'react-router-dom';
import './Register.css';
import { useState } from 'react';

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
  
  function handleRegister() {
    console.log(userdata);
    navigate("/login");
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
        <div> <input type='text' placeholder='Firstname Lastname' className='placeholderFieldOfRegisterPage' value={userdata.name} onChange={handleNameChange} /></div>
        
        <div><label className='labelsOfInputFields'>Email id</label></div>
        <div><input type='email' placeholder='test@gmail.com' className='placeholderFieldOfRegisterPage' value={userdata.email} onChange={handleEmailChange}></input></div>
        <div><label className='labelsOfInputFields'>Password</label></div>
        <div><input type='password' placeholder='Test@123' className='placeholderFieldOfRegisterPage' value={userdata.password} onChange={handlePasswordChange}></input></div>
        <div className='btnSectionOfRegisterationPage'><button className='btnRegister' onClick={handleRegister} >Register</button></div>

      </div>
      <div><footer className='footerNote'>Copyright <i class="fa fa-copyright" aria-hidden="true"></i>2022</footer></div>
      

    </div>
  )
}
export default Register;