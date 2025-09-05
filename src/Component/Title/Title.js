import { useNavigate } from 'react-router-dom';
import './Title.css';
import { useState } from 'react';

function Title(){
    const navigate=useNavigate();
    const navigateToLogin=()=>{
        navigate("/login");
    }
     const navigateToDashboard=()=>{
        navigate("/");
    }
      const [userdata,setUserData]=useState({title:"",description:""});
    function handleTitleChange(event) {
  let user={...userdata}
    user["title"]=event.target.value;
    setUserData(user)

  }function handleDescriptionChange(event) {
      let user={...userdata}
    user["description"]=event.target.value;
    setUserData(user)
  }
function handleSave() {
    console.log(userdata);
  }



    
    return(
        <div className='MainSectionOfTitlePage'>
           <div className='headerSectionOfTitlePage'>
                <div className='titleOfTitlePage' onClick={navigateToDashboard}>Blogs</div>
                <div className='loginAndRegistrationSectionOfTitle'>
                    <div className='rightSectionTitlesOfTitlePage'> Ishwari Kanase <i class="fa fa-arrow-circle-o-right rightArrow" aria-hidden="true"></i></div>
                    <div className='rightSectionTitlesOfTitlePage' onClick={navigateToLogin}>Logout</div>
                </div>

            </div>
            <div className='outerBoxOfTitlePage'>
                <div>
                    <input type='text'placeholder='Title' className='mainTitleInOuterBox' value={userdata.title} onChange={handleTitleChange}></input>
                </div>
                <hr/>
                <div>
                    <textarea className='textareaField' value={userdata.description} onChange={handleDescriptionChange}>Desription</textarea>
                </div>
                <div className='btnSectionOfTitlePage'>
                    <div><button className='cancelAndSaveBtn' >Cancel</button></div>
                    <div><button className='cancelAndSaveBtn' onClick={handleSave}>Save</button></div>

                </div>
            </div>
            <div className='footerNote'>Copyright<i class="fa fa-copyright" aria-hidden="true"></i>2022</div>
        </div>
    )
}
export  default Title;