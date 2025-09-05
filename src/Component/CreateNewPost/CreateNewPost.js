import { useNavigate } from 'react-router-dom';
import './CreateNewPost.css';
import { useState } from 'react';
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



    const blogsinfo = [
        {
            Title: "hello world",
            Createdby: "ishwarikanase@gmail.com",
            Createdat: "1st Dec 2022",
            Description: "Lorem Ipsum is simply dummy text "
        },
        {
            Title: "hello world",
            Createdby: "ishwarikanase@gmail.com",
            Createdat: "1st Dec 2022",
            Description: "Lorem Ipsum is simply dummy text "
        },
        {
            Title: "hello world",
            Createdby: "ishwarikanase@gmail.com",
            Createdat: "1st Dec 2022",
            Description: "Lorem Ipsum is simply dummy text "
        }
    ]

    return (
        <div className='MainSectionOfNewPost'>
            <div className='headerSectionOfNewPost'>
                <div className='titleOfNewPostPage' onClick={navigateToDashboard}>Blogs</div>
                <div className='loginAndRegistrationSectionOfNewPost'>
                    <div className='rightSectionTitlesOfNewPostPage'>Ishwari Kanase<i class="fa fa-arrow-circle-o-right rightArrow" aria-hidden="true"></i></div>
                    <div className='rightSectionTitlesOfNewPostPage' onClick={navigateToLogin}>Logout</div>
                </div>

            </div>
            <div className='headSectionOfNewPost'>
                <div className='btnAndTitleSection'>
                    <div className='headTitleOfNewPost'>Blogs</div>
                    <div><button className='createNewPostBtn' onClick={navigateToTitle}><i class="fa fa-plus-circle " aria-hidden="true"></i>  Create new post</button></div>

                </div>
                <div className='subTitleSectionOfNewPost'>
                    Publish your passions ,your way...
                    <hr />
                </div>
            </div>
            {blogsinfo.map((blog) => {

                return <div className='innerBoxOfNewPost'>
                    <div className='helloWorldTitle'>{blog.Title}</div>
                    <div><strong>Created By</strong><em>{blog.Createdby}</em></div>
                    <div><strong>Created At</strong> <em>{blog.Createdat}</em></div>
                    <hr />
                    <div className='paragraphSectionOfNewPost'>
                        {blog.Description}
                    </div>
                    <div className='btnSectionOfNewPost'>
                        <div className='buttonsOfNewPost'>
                            <div><button className='likeButton'><i className="fa fa-thumbs-up" aria-hidden="true"></i></button></div>
                            <div><button className='dislikeButton'><i className="fa fa-thumbs-down" aria-hidden="true"></i></button></div>
                        </div>
                        <div className='buttonsOfNewPost'>
                            <div><button className='editButton' onClick={navigateToTitle}><i className="fa fa-pencil" aria-hidden="true"></i>  Edit</button></div>
                            <div><button className='deleteButton'><i className="fa fa-trash-o" aria-hidden="true"></i>  Delete</button></div>
                        </div>
                    </div>
                </div>
            })}
            <div>
            <footer className='footerNoteOfLoginPage'>Copyright
                <i class="fa fa-copyright" aria-hidden="true"></i>2022</footer>
        </div>
        </div >
    )
}
export default CreateNewPost;