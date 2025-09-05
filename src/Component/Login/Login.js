import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
function Login(){
    const navigate =useNavigate();
    const navigateToDashboard =()=>{
        navigate("/");
    }
    const navigateToLogin =()=>{
        navigate("/login");
    }
    const navigateToRegister=()=>{
        navigate ("/register");
    }
    const navigateToCreateNewPost=()=>{
        navigate ("/createnewpost");
    }
    
  const [userdata,setUserData]=useState({email:"",password:""});
    function handleEmailChange(event) {
  let user={...userdata}
    user["email"]=event.target.value;
    setUserData(user)

  }function handlePasswordChange(event) {
      let user={...userdata}
    user["password"]=event.target.value;
    setUserData(user)
  }
  
  function handleLogin() {
    console.log(userdata);
     navigate( "/createnewpost");
  } 
    return(
        <div className='mainSectionOfLoginPage'>
            <div className='headerSectionOfLoginPage'>
                <div className='leftSectionTitlesOfLoginPage' onClick={navigateToDashboard}>Blogs</div>
                <div className='loginAndRegisterSectionOfLoginPage'>
                    <div className='rightSectionTitlesOfLoginPage' onClick={navigateToLogin}>Login</div>
                    <div className='rightSectionTitlesOfLoginPage' onClick={navigateToRegister}>Register</div>
                </div>
            </div>
            <div  className='loginBox'>
            <div className='titleOfLoginPage'>Blogs</div> 
            <div className='subTitleOfLoginPage'>Public your passions,your way...</div>
            <hr/>
            <div className='titleLogin'>Login</div>
            <div><label className='labelsOfLoginInputFields'>Email id</label></div>
            <div><input type='email' placeholder='test@gmail.com' className='placeholderFieldOfLoginPage'  value={userdata.email} onChange={handleEmailChange} ></input></div>
            <div><label className='labelsOfLoginInputFields'>Password</label></div>
            <div><input type='password' placeholder='Test@123' className='placeholderFieldOfLoginPage'  value={userdata.password} onChange={handlePasswordChange}></input></div>
            <div className='btnSectionOfLoginPage'><button className='btnLogin' onClick={handleLogin}>Login</button></div> 
            </div>
            <footer className='footerNoteOfLoginPage'>Copyright
                <i class="fa fa-copyright" aria-hidden="true"></i>2022</footer>
        </div>
    ) 
}
export default Login;