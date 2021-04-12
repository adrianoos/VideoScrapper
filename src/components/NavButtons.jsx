import React from 'react';
import {Row, Col, Button } from 'reactstrap';

const NavButtons = ({ FavsToggle, FavsDisplay, SortbyDate, Sort, DeleteAll, ChangeDisplay, displayType }) => {

    return (
   <div className="NavButtons">
     
      <Row>
        <Col>
        { FavsDisplay ? <Button className='ml-1' style={{background: 'lightblue'}} onClick={() => FavsToggle()}>Favorites</Button> :
         <Button className='m-1' onClick={() => FavsToggle()}>Favorites</Button>
        }
        {
          Sort ? <Button className='m-1' style={{background: 'lightblue'}} onClick={() => SortbyDate()}>Newest</Button> : 
          <Button className='m-1' onClick={() => SortbyDate()}>Oldest</Button>
        }      
        <Button className='m-1' onClick={() => DeleteAll()}>Delete All</Button>
        {
          displayType ? <Button className='m-1' style={{background: 'lightblue'}}  onClick={() => ChangeDisplay()}>Display: List</Button> :
          <Button className='m-1' onClick={() => ChangeDisplay()}>Display: ThumbNails</Button>
        }
        </Col>
      </Row>
      
   </div>
    );
  }
  
  export default NavButtons;
  



