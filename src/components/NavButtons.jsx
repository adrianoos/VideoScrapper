import React from 'react';
import { Row, Button, Container } from 'reactstrap';
import { Upload } from './Upload'

const NavButtons = ({ FavsToggle, FavsDisplay, SortbyDate, Sort, DeleteAll, ChangeDisplay, displayType, urls, setUrls, FetchData }) => {

    return (
   <Container className="d-flex justify-content-center" id='navBtnsCnt'>
     <Row>
       {FavsDisplay ? <Button className='navpg shadow ml-1' style={{background: 'lightblue'}} onClick={() => FavsToggle()}>Favorites</Button> :
       <Button className='navpg shadow m-1' onClick={() => FavsToggle()}>Favorites</Button>}

       {Sort ? <Button className='navpg shadow m-1' style={{background: 'lightblue'}} onClick={() => SortbyDate()}>Newest</Button> : 
       <Button className='navpg shadow m-1' onClick={() => SortbyDate()}>Oldest</Button>}  
            
       <Button className='navpg shadow m-1' onClick={() => DeleteAll()}>Delete All</Button>

       {displayType ? <Button className='navpg shadow m-1' style={{background: 'lightblue'}} onClick={() => ChangeDisplay()}>Display: List</Button> :
      <Button className='navpg shadow m-1' onClick={() => ChangeDisplay()}>Display: Thumbs</Button>}
           
       <Upload buttonLabel={'Upload'} className={'navpg shadow m-1'} urls={urls} setUrls={setUrls} FetchData={FetchData}/>
     </Row>
  </Container>
    );
  }
  
  export default NavButtons;
  



