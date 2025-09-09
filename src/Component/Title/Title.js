import { useNavigate } from 'react-router-dom';
import './Title.css';
import React,  { useEffect,useState } from 'react';
import axios from 'axios';


function Title(){
    const navigate=useNavigate();
    const navigateToLogin=()=>{
        navigate("/login");
    }
     const navigateToDashboard=()=>{
        navigate("/");
    }
      const [blogsdata,setBlogsData]=useState({title:"",description:""});
    function handleTitleChange(event) {
  let blog={...blogsdata}
    blog["title"]=event.target.value;
    setBlogsData(blog)

  }function handleDescriptionChange(event) {
      let blog={...blogsdata}
    blog["description"]=event.target.value;
    setBlogsData(blog)
  }
function handleSave(event) {
    // console.log(userdata);
  event.preventDefault();
  axios.post('http://localhost:3001/blogs', blogsdata)
  .then(
    response => {
      console.log('Data received:', response.data);
    })
    .catch(error=> {
      console.error('Request failed:', error.message);
    }
  );

  }
function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://localhost:3001/blogs' ,blogsdata) // Replace with your real API
      .then((response) => {
        setBlogs(response.data); // Adjust if your API wraps data differently
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || 'Something went wrong');
        setLoading(false);
      });
  }, []);


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
                    <input type='text'placeholder='Title' className='mainTitleInOuterBox' value={blogsdata.title} onChange={handleTitleChange}></input>
                </div>
                <hr/>
                <div>
                    <textarea className='textareaField' value={blogsdata.description} onChange={handleDescriptionChange}>Desription</textarea>
                </div>
                <div className='btnSectionOfTitlePage'>
                    <div><button className='cancelAndSaveBtn' >Cancel</button></div>
                    <div><button className='cancelAndSaveBtn' onClick={handleSave}>Save</button></div>

                </div>
            </div>
            <div className='footerNote'>Copyright<i class="fa fa-copyright" aria-hidden="true" ></i>2022</div>
        </div>
    )
}

export  default Title;