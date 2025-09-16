import { useL,useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CreateNewPost.css';
import { useParams } from "react-router-dom";


function CreateNewPost() {
  const [blogsdata, setBlogsData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  
  const navigateToTitle = () => {
    navigate("/title");
  }
  const navigateToLogin = () => {
    navigate("/login");
  }
  const navigateToDashboard = () => {
    navigate("/");
  }

  useEffect(() => {
    axios.get("http://localhost:3001/blogs").then((res) => {
      setBlogsData(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/blogs/${id}`).then(() => {
      setBlogsData(blogsdata.filter((b) => b.id !== id));
    });
  };
 const handleLike = (id, currentLikes) => {
    axios
      .patch(`http://localhost:3001/blogs/${id}`, { likes: currentLikes + 1 })
      .then((res) => {
        setBlogsData(
          blogsdata.map((b) =>
            b.id === id ? { ...b, likes: res.data.likes } : b
          )
        );
      });
  };
const handleDislike = (id, currentDislikes) => {
    axios
      .patch(`http://localhost:3001/blogs/${id}`, {
        dislikes: currentDislikes + 1,
      })
      .then((res) => {
        setBlogsData(
          blogsdata.map((b) =>
            b.id === id ? { ...b, dislikes: res.data.dislikes } : b
          )
        );
      });
  };

const user = JSON.parse(localStorage.getItem("user"));


  return (
    <div className='MainSectionOfNewPost'>
      <div className='headerSectionOfNewPost'>
        <div className='titleOfNewPostPage' onClick={navigateToDashboard}>Blogs</div>
        <div className='loginAndRegistrationSectionOfNewPost'>
          <div className='rightSectionTitlesOfNewPostPage'>Ishwari Kanase<i className="fa fa-arrow-circle-o-right rightArrow" aria-hidden="true"></i></div>
          <div className='rightSectionTitlesOfNewPostPage' onClick={navigateToLogin}>Logout</div>
        </div>
      </div>

      <div className='headSectionOfNewPost'>
        <div className='btnAndTitleSection'>
          <div className='headTitleOfNewPost'>Blogs</div>
          <div>
            <button className='createNewPostBtn' onClick={navigateToTitle}>
              <i className="fa fa-plus-circle" aria-hidden="true"></i> Create new post
            </button>
          </div>
        </div>
        <div className='subTitleSectionOfNewPost'>
          Publish your passions, your way...
          <hr />
        </div>
      </div>

     {blogsdata.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        blogsdata.map((blog, index) => (
          <div className='innerBoxOfNewPost' key={blog.id || index}>
            <div className='helloWorldTitle'>{blog.title}</div>
            <div><strong>Created By </strong><em>{user ? user.email : "Unknown"} </em></div>
            <div><strong>Created At </strong><em> {blog.createdat } </em></div>
            {/* <div><strong>Created At </strong><em>{user ? user.email : "Unknown"} </em></div> */}

            <hr />
            <div className='paragraphSectionOfNewPost'>
              {blog.description}
              {/* {user ? user.email : "Unknown"}  */}
            </div>
            <div className='btnSectionOfNewPost'>
              <div className='buttonsOfNewPost'>
                <div><button className='likeButton' onClick={() => handleLike(blog.id, blog.likes)}><i className="fa fa-thumbs-up" aria-hidden="true">{blog.likes}</i></button></div>
                <div><button className='dislikeButton' onClick={() => handleDislike(blog.id, blog.dislikes)}><i className="fa fa-thumbs-down" aria-hidden="true">{blog.dislikes}</i></button></div>
              </div>
              <div className='buttonsOfNewPost'>
                <div><button className='editButton' onClick={()=>navigate("/title/"+blog.id)}><i className="fa fa-pencil" aria-hidden="true"></i> Edit</button></div>
                <div><button className='deleteButton' onClick={() =>handleDelete(blog.id)}><i className="fa fa-trash-o" aria-hidden="true"></i> Delete</button></div>
              </div>
            </div>
          </div>
        ))
      )}

      <footer className='footerNoteOfLoginPage'>
        Copyright <i className="fa fa-copyright" aria-hidden="true"></i>2022
      </footer>
    </div>
  );
}


export default CreateNewPost;
