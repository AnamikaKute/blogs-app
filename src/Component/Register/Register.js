import './Register.css';
function Register(){
    return(
        <div className='mainSectionOfRegisterationPage'>
            <div className='headerSectionOfRegisterationPage'>
                <div className='leftSectionTitle'>Blogs</div>
                <div className='loginAndRegisterSection'>
                    <div className='rightSectionTitles'>Login</div>
                    <div className='rightSectionTitles'>Register</div>

                </div>

            </div>
            <div  className='registrationBox'>
            <div className='titleOfRegisterationPage'>Blogs</div>
            <div className='subTitleOfRegisterationPage'>Public your passions,your way...</div>
            <hr/>
            <div className='titleRegister'>Register</div>
            <div><label className='labelsOfInputFields'>Name</label></div>
            <div> <input type='text' placeholder='Firstname Lastname' className='placeholderFieldOfRegisterPage'></input></div>
            <div><label className='labelsOfInputFields'>Email id</label></div>
            <div><input type='email' placeholder='test@gmail.com' className='placeholderFieldOfRegisterPage'></input></div>
            <div><label className='labelsOfInputFields'>Password</label></div>
            <div><input type='password' placeholder='Test@123' className='placeholderFieldOfRegisterPage'></input></div>
            <div className='btnSectionOfRegisterationPage'><button className='btnRegister'>Register</button></div>
            
            </div>
            <footer className='footerNote'>Copyright@2022</footer>
        </div>
    ) 
}
export default Register;