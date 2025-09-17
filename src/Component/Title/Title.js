import {useNavigate, useParams } from 'react-router-dom';
import './Title.css';
import React,  { useEffect,useState } from 'react';
import axios from 'axios';
function Title() {
  const navigate = useNavigate();
  const { id } = useParams();
    const navigateToLogin=()=>{
        navigate("/login");
    }
     const navigateToDashboard=()=>{
        navigate("/");
    }

  const [blogsdata, setBlogsData] = useState({
    title: "",
    description: ""
  });

  function handleTitleChange(event) {
    let blog = { ...blogsdata };
    blog["title"] = event.target.value;
    setBlogsData(blog);
  }

  function handleDescriptionChange(event) {
    let blog = { ...blogsdata };
    blog["description"] = event.target.value;
    setBlogsData(blog);
  }

  function handleToSave() {
const user = JSON.parse(localStorage.getItem("user"));

  if (id) {
    const blogWithUser = {
      ...blogsdata,
      createdBy: user?.email || "Anonymous",
    };

    axios.put(`http://localhost:3001/blogs/${id}`, blogWithUser)
      .then(() => navigate("/createnewpost"));
  } 
  else {
    
    const blogWithUser = {
      ...blogsdata,
      createdBy: user?.email || "Anonymous",
      likes: 0,
      dislikes: 0,
      createdAt: new Date().toLocaleDateString(),
    };

    axios.post("http://localhost:3001/blogs", blogWithUser)
      .then(() => navigate("/createnewpost"));
  }
}
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/blogs/${id}`).then((res) => {
        setBlogsData({
          title: res.data.title,
          description: res.data.description
        });
      });
    }
  }, [id]);

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
                    <input type='text'placeholder='Title' className='mainTitleInOuterBox' value={blogsdata.title} onChange={handleTitleChange}></input>
                </div>
                <hr/>
                <div>
                    <textarea className='textareaField' value={blogsdata.description} onChange={handleDescriptionChange}>Description</textarea>
                </div>
                <div className='btnSectionOfTitlePage'>
                    <div><button className='cancelAndSaveBtn' >Cancel</button></div>
                    <div><button className='cancelAndSaveBtn' onClick={ handleToSave}>Save</button></div>

                </div>
            </div>
            <div className='footerNote'>Copyright<i class="fa fa-copyright" aria-hidden="true" ></i>2022</div>
        </div>
    )
  }
  


export  default Title;