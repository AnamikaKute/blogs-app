import {useNavigate, useParams } from 'react-router-dom';
import './Title.css';
import React,  { useEffect,useState } from 'react';
import axios from 'axios';

// function Title(){
//     const navigate=useNavigate();
//     const {id}=useParams();
//     const navigateToLogin=()=>{
//         navigate("/login");
//     }
//      const navigateToDashboard=()=>{
//         navigate("/");
//     }
//      const navigateToCreateNewPost=()=>{
//         navigate("/createnewpost");
//     }
//       const [blogsdata,setBlogsData]=useState({title:"",description:""});

//     function handleTitleChange(event) {
//   let blog={...blogsdata}
//     blog["title"]=event.target.value;
//     setBlogsData(blog)

//   }function handleDescriptionChange(event) {
//       let blog={...blogsdata}
//     blog["description"]=event.target.value;
//     setBlogsData(blog)

//   }
// function handleToSave() {
//     // console.log(userdata);
//     if(id){
//   axios.put(`http://localhost:3001/blogs/${id}`,blogsdata)
//   .then(()=>navigate("/createnewpost"))
//   console.log(id)
//     }
//     else{
//       axios.post(`http://localhost:3001/blogs/${id}`,blogsdata)
//   .then(()=>navigate("/createnewpost"))

//     }
//   }
// function BlogList() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`https://localhost:3001/blogs/${id}`) // Replace with your real API
//       .then((response) => {
//         setBlogsData({
//        title: response.data.title,
//         description :response.data.description,
//         });
//       })
//       .catch((error) => {
//         setError(error.message || 'Something went wrong');
//         // setLoading(false);
//       });
//   }, [id]);


// }

// function Title() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [blogsdata, setBlogsData] = useState({ title: "", description: "" });            
//     const navigateToLogin=()=>{
//         navigate("/login");
//     }
//      const navigateToDashboard=()=>{
//         navigate("/");
//     }

//   function handleTitleChange(event) {
//     let blog = { ...blogsdata };
//     blog["title"] = event.target.value;
//     setBlogsData(blog);
//   }

//   function handleDescriptionChange(event) {
//     let blog = { ...blogsdata };
//     blog["description"] = event.target.value;
//     setBlogsData(blog);
//   }

//   function handleToSave() {
//     if (id) {
//       axios
//         .put(`http://localhost:3001/blogs/${id}`, blogsdata)
//         .then(() => navigate("/createnewpost"));
//     } else {
//       axios
//         .post("http://localhost:3001/blogs", blogsdata)
//         .then(() => navigate("/createnewpost"));
//     }
//   }

//   useEffect(() => {
//     if (id) {
//       axios.get(`http://localhost:3001/blogs/${id}`).then((res) => {
//         setBlogsData({
//           title: res.data.title,
//           description: res.data.description,
//         });
//       });
//     }
//   }, [id]);
function Title() {
  const navigate = useNavigate();
  const { id } = useParams();
    const navigateToLogin=()=>{
        navigate("/login");
    }
     const navigateToDashboard=()=>{
        navigate("/");
    }

  // ✅ initialize with empty object so it never breaks db.json
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
    if (id) {
      // update existing blog
      axios
        .put(`http://localhost:3001/blogs/${id}`, blogsdata)
        .then(() => navigate("/createnewpost"));
    } else {
      // create new blog
      axios
        .post("http://localhost:3001/blogs", blogsdata)
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