import React from 'react';
import { Button, Container } from 'reactstrap';
import { Upload } from './Upload'

const NavButtons = ({ FavsToggle, FavsDisplay, SortbyDate, Sort, DeleteAll, ChangeDisplay, displayType, urls, setUrls, FetchData }) => {

    return (
   <Container className="d-flex justify-content-center" id='navBtnsCnt'>
       {FavsDisplay ? <Button className='navpg shadow ml-1 btn-warning' style={{background: 'lightblue'}} onClick={() => FavsToggle()}>Favorites</Button> :
       <Button className='navpg m-1 btn-warning' onClick={() => FavsToggle()}>Favorites</Button>}

       {Sort ? <Button className='navpg m-1 btn-warning' style={{background: 'lightblue'}} onClick={() => SortbyDate()}>Newest</Button> : 
       <Button className='navpg m-1 btn-warning' onClick={() => SortbyDate()}>Oldest</Button>}  
            
       <Button className='navpg m-1 btn-warning' onClick={() => DeleteAll()}>Delete All</Button>

       {displayType ? <Button className='navpg m-1 btn-warning' style={{background: 'lightblue'}} onClick={() => ChangeDisplay()}>Display: List</Button> :
      <Button className='navpg m-1 btn-warning' onClick={() => ChangeDisplay()}>Display: Thumbs</Button>}
           
      <Upload buttonLabel={'Upload'} className={'navpg m-1 btn-warning'} urls={urls} setUrls={setUrls} FetchData={FetchData}/>
  </Container>
    );
  }
  
  export default NavButtons;
  



