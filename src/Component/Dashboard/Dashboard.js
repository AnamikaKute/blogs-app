import './Dashboard.css';

function Dashboard() {
    return (
        <div className='mainSectionOfDashboardPage'>
            <div className='headerSection'>
                <div className='titleOfLoginScreen'>Blogs</div>
                <div className='loginAndRegisterSection'>
                    <div className='loginSection'>Login</div>
                    <div className='loginSection'>Register</div>

                </div>
            </div>
            <div className='innerBoxOfLoginPage'>
                <div className='titleLogin'>Blogs!</div>
                <div className='subtitleLoginPage'> Publish your passion, your way...</div>
                <hr />
            
            <div className='buttonSection'>
                    <div><button className='loginButton'>Login</button></div>
                    <div><button className='registerButton'>Register</button></div>

            </div>
            </div>
        </div>
    )
}
export default Dashboard;