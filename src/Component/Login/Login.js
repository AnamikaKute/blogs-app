import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();

    const navigateToDashboard = () => {
        navigate("/");
    };
    const navigateToLogin = () => {
        navigate("/login");
    };
    const navigateToRegister = () => {
        navigate("/register");
    };
    const navigateToCreateNewPost = () => {
        navigate("/createnewpost");
    };

    const [userdata, setUserData] = useState({ email: "", password: "" });

    function handleEmailChange(event) {
        setUserData({ ...userdata, email: event.target.value });

    }

    function handlePasswordChange(event) {
        setUserData({ ...userdata, password: event.target.value });
    }

    function handleLogin() {
        
const savedUser = JSON.parse(localStorage.getItem("user"));

        localStorage.setItem("loggedInUser", JSON.stringify(savedUser));


axios.get("http://localhost:3001/users")
  .then((res) => {
    let loggedInUser = null;

    res.data.map((u) => {
      if (u.email === userdata.email && u.password === userdata.password) {
        loggedInUser = u;
      }
      return u;
    });

    if (loggedInUser) {
      console.log("Login successful");
      navigate("/createnewpost");
     localStorage.setItem("user", JSON.stringify(loggedInUser));
} else {
  console.log("Invalid email or password");
}
  });
    }

    return (
        <div className="mainSectionOfLoginPage">
            <div className="headerSectionOfLoginPage">
                <div className="leftSectionTitlesOfLoginPage" onClick={navigateToDashboard}>
                    Blogs
                </div>
                <div className="loginAndRegisterSectionOfLoginPage">
                    <div className="rightSectionTitlesOfLoginPage" onClick={navigateToLogin}>
                        Login
                    </div>
                    <div className="rightSectionTitlesOfLoginPage" onClick={navigateToRegister}>
                        Register
                    </div>
                </div>
            </div>

            <div className="loginBox">
                <div className="titleOfLoginPage">Blogs</div>
                <div className="subTitleOfLoginPage">Public your passions, your way...</div>
                <hr />
                <div className="titleLogin">Login</div>

                <div>
                    <label className="labelsOfLoginInputFields">Email id</label>
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="test@gmail.com"
                        className="placeholderFieldOfLoginPage"
                        value={userdata.email}
                        onChange={handleEmailChange}
                    />
                </div>

                <div>
                    <label className="labelsOfLoginInputFields">Password</label>
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Test@123"
                        className="placeholderFieldOfLoginPage"
                        value={userdata.password}
                        onChange={handlePasswordChange}
                    />
                </div>

                <div className="btnSectionOfLoginPage">
                    <button className="btnLogin" onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </div>

            <footer className="footerNoteOfLoginPage">
                Copyright <i className="fa fa-copyright" aria-hidden="true"></i>2022
            </footer>
        </div>
    );
}

export default Login;
