// import { useNavigate } from 'react-router-dom';
// import './CreateNewPost.css';
// // import { useState } from 'react';
//   import React, { useEffect, useState } from 'react';
// import axios from 'axios';


// function CreateNewPost() {
//     const navigate = useNavigate();
//     const navigateToTitle = () => {
//         navigate("/title");
//     }
//     const navigateToLogin = () => {
//         navigate("/login");
//     }
//     const navigateToDashboard = () => {
//         navigate("/");
//     }
  

// function CreateNewPost() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => { 
//       axios
//       .get('http://your-api.com/api/blogs' ,blogs) // Replace with your API URL
//       .then((response) => {
//         setBlogs(response.data); // adjust based on response shape
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message || 'Error fetching blogs');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading blogs...</p>;
//   if (error) return <p>Error: {error}</p>;

// //   return (
// //     <div className="post-screen">
// //       <h2>All Blog Posts</h2>
// //       <ul>
// //         {blogs.map((blog) => (
// //           <li key={blog.id}>
// //             <h3>{blog.title}</h3>
// //             <p>{blog.content}</p>
// //             <small>Author: {blog.author}</small>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default PostScreen;



//     const blogsinfo = [
//         {
//             Title: "hello world",
//             Createdby: "ishwarikanase@gmail.com",
//             Createdat: "1st Dec 2022",
//             Description: "Lorem Ipsum is simply dummy text "
//         },
//         {
//             Title: "hello world",
//             Createdby: "ishwarikanase@gmail.com",
//             Createdat: "1st Dec 2022",
//             Description: "Lorem Ipsum is simply dummy text "
//         },
//         {
//             Title: "hello world",
//             Createdby: "ishwarikanase@gmail.com",
//             Createdat: "1st Dec 2022",
//             Description: "Lorem Ipsum is simply dummy text "
//         }
//     ]

//     return (
//         <div className='MainSectionOfNewPost'>
//             <div className='headerSectionOfNewPost'>
//                 <div className='titleOfNewPostPage' onClick={navigateToDashboard}>Blogs</div>
//                 <div className='loginAndRegistrationSectionOfNewPost'>
//                     <div className='rightSectionTitlesOfNewPostPage'>Ishwari Kanase<i class="fa fa-arrow-circle-o-right rightArrow" aria-hidden="true"></i></div>
//                     <div className='rightSectionTitlesOfNewPostPage' onClick={navigateToLogin}>Logout</div>
//                 </div>

//             </div>
//             <div className='headSectionOfNewPost'>
//                 <div className='btnAndTitleSection'>
//                     <div className='headTitleOfNewPost'>Blogs</div>
//                     <div><button className='createNewPostBtn' onClick={navigateToTitle}><i class="fa fa-plus-circle " aria-hidden="true"></i>  Create new post</button></div>

//                 </div>
//                 <div className='subTitleSectionOfNewPost'>
//                     Publish your passions ,your way...
//                     <hr />
//                 </div>
//             </div>
//             {blogs.map((blog) => {
//         //   <li key={blog.id}>

//                 return <div className='innerBoxOfNewPost' key={blog.id}>
//                     <div className='helloWorldTitle'>{blog.Title}</div>
//                     <div><strong>Created By</strong><em>{blog.Createdby}</em></div>
//                     <div><strong>Created At</strong> <em>{blog.Createdat}</em></div>
//                     <hr />
//                     <div className='paragraphSectionOfNewPost'>
//                         {blog.Description}
//                     </div>
//                     <div className='btnSectionOfNewPost'>
//                         <div className='buttonsOfNewPost'>
//                             <div><button className='likeButton'><i className="fa fa-thumbs-up" aria-hidden="true"></i></button></div>
//                             <div><button className='dislikeButton'><i className="fa fa-thumbs-down" aria-hidden="true"></i></button></div>
//                         </div>
//                         <div className='buttonsOfNewPost'>
//                             <div><button className='editButton' onClick={navigateToTitle}><i className="fa fa-pencil" aria-hidden="true" onClick={navigateToTitle}></i>  Edit</button></div>
//                             <div><button className='deleteButton'><i className="fa fa-trash-o" aria-hidden="true"></i>  Delete</button></div>
//                         </div>
//                     </div>
//                 </div>
//             })}
//             <div>
//             <footer className='footerNoteOfLoginPage'>Copyright
//                 <i class="fa fa-copyright" aria-hidden="true"></i>2022</footer>
//         </div>
//         </div >
//     )
// }
// }
// export default CreateNewPost;
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CreateNewPost.css';

function CreateNewPost() {
  const navigate = useNavigate();
  
  const navigateToTitle = () => {
    navigate("/title");
  }
  const navigateToLogin = () => {
    navigate("/login");
  }
  const navigateToDashboard = () => {
    navigate("/");
  }

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/blogs') // replace with real API url
      .then((response) => {
        setBlogs(response.data); // adjust if response shape is different
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Error fetching blogs');
        setLoading(false);
      });
  }, []);
 
  function handleDelete(id) {
  axios.delete("http://localhost:3001/blogs/" + id)
    .then(() => {
      console.log("Deleted blog:", id);
    });
}



  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p>Error: {error}</p>;

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

      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        blogs.map((blog, index) => (
          <div className='innerBoxOfNewPost' key={blog.id || index}>
            <div className='helloWorldTitle'>{blog.Title || blog.title}</div>
            <div><strong>Created By </strong><em>{blog.Createdby || blog.author}</em></div>
            <div><strong>Created At </strong><em>{blog.Createdat || blog.createdAt}</em></div>
            <hr />
            <div className='paragraphSectionOfNewPost'>
              {blog.Description || blog.content}
            </div>
            <div className='btnSectionOfNewPost'>
              <div className='buttonsOfNewPost'>
                <div><button className='likeButton'><i className="fa fa-thumbs-up" aria-hidden="true"></i></button></div>
                <div><button className='dislikeButton'><i className="fa fa-thumbs-down" aria-hidden="true"></i></button></div>
              </div>
              <div className='buttonsOfNewPost'>
                <div><button className='editButton' onClick={navigateToTitle}><i className="fa fa-pencil" aria-hidden="true"></i> Edit</button></div>
                <div><button className='deleteButton'  onClick={handleDelete}><i className="fa fa-trash-o" aria-hidden="true"></i> Delete</button></div>
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
