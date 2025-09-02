import './Title.css';
function Title(){
    return(
        <div className='MainSectionOfTitlePage'>
           <div className='headerSectionOfTitlePage'>
                <div className='titleOfTitlePage'>Blogs</div>
                <div className='loginAndRegistrationSectionOfTitle'>
                    <div className='rightSectionTitlesOfTitlePage'>Ishwari Kanase   <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></div>
                    <div className='rightSectionTitlesOfTitlePage'>Logout</div>
                </div>

            </div>
            <div className='outerBoxOfTitlePage'>
                <div className='mainTitleInOuterBox'>Title</div>
                <hr/>
                <div className='innerBoxOfTitlePage'>
                    <div className='descriptionTitle'>Desription</div>
                </div>
                <div className='btnSectionOfTitlePage'>
                    <div><button className='cancelAndSaveBtn'>Cancel</button></div>
                    <div><button className='cancelAndSaveBtn'>Save</button></div>

                </div>
            </div>
            <div className='footerNote'>Copyright<i class="fa fa-copyright" aria-hidden="true"></i>2022</div>
        </div>
    )
}
export  default Title;