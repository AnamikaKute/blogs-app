import './Login.css';
function Login(){
    return(
        <div className='mainSectionOfLoginPage'>
            <div className='headerSectionOfLoginPage'>
                <div className='leftSectionTitlesOfLoginPage'>Blogs</div>
                <div className='loginAndRegisterSectionOfLoginPage'>
                    <div className='rightSectionTitlesOfLoginPage'>Login</div>
                    <div className='rightSectionTitlesOfLoginPage'>Register</div>

                </div>

            </div>
            <div  className='loginBox'>
            <div className='titleOfLoginPage'>Blogs</div>
            <div className='subTitleOfLoginPage'>Public your passions,your way...</div>
            <hr/>
            <div className='titleLogin'>Login</div>
           
            <div><label className='labelsOfLoginInputFields'>Email id</label></div>
            <div><input type='email' placeholder='test@gmail.com' className='placeholderFieldOfLoginPage'></input></div>
            <div><label className='labelsOfLoginInputFields'>Password</label></div>
            <div><input type='password' placeholder='Test@123' className='placeholderFieldOfLoginPage'></input></div>
            <div className='btnSectionOfLoginPage'><button className='btnLogin'>Login</button></div>
            
            </div>
            <footer className='footerNoteOfLoginPage'>Copyright@2022</footer>
        </div>
    ) 
}
export default Login;