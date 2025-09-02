import './CreateNewPost.css';
function CreateNewPost() {
    return (
        <div className='MainSectionOfNewPost'>
            <div className='headerSectionOfNewPost'>
                <div className='titleOfNewPostPage'>Blogs</div>
                <div className='loginAndRegistrationSectionOfNewPost'>
                    <div className='rightSectionTitlesOfNewPostPage'>Ishwari Kanase   <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></div>
                    <div className='rightSectionTitlesOfNewPostPage'>Logout</div>
                </div>

            </div>
            <div className='headSectionOfNewPost'>
                <div className='btnAndTitleSection'>
                    <div className='headTitleOfNewPost'>Blogs</div>
                    <div><button className='createNewPostBtn'><i class="fa fa-plus-circle " aria-hidden="true"></i>  Create new post</button></div>

                </div>
                <div className='subTitleSectionOfNewPost'>
                    Publish your passions ,your way...
                    <hr />
                </div>
            </div>
            <div className='innerBoxOfNewPost'>
                <div className='helloWorldTitle'>Hello World</div>
                <div><strong>Created By</strong><em>ishwari.kanase@gmail.com</em></div>
                <div><strong>Created At</strong> <em>1st Dec ,2021</em></div>
                <hr />
                <div className='paragraphSectionOfNewPost'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
                </div>
                <div className='btnSectionOfNewPost'>
                    <div className='buttonsOfNewPost'>
                    <div><button className='likeButton'><i class="fa fa-thumbs-up" aria-hidden="true"></i></button></div>
                    <div><button className='dislikeButton'><i class="fa fa-thumbs-down" aria-hidden="true"></i></button></div>
                    </div>
                    <div className='buttonsOfNewPost'>
                        <div><button className='editButton'><i class="fa fa-pencil" aria-hidden="true"></i>  Edit</button></div>
                    <div><button className='deleteButton'><i class="fa fa-trash-o" aria-hidden="true"></i>  Delete</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateNewPost;