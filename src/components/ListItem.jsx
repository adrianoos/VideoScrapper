import React from 'react';

import { Button, ListGroup, ListGroupItem} from 'reactstrap';

const ListItem = ({title}) => {
    return (
   <div>
    <ListGroup>
      <ListGroupItem className="d-flex bd-highlight" style={{background:'black', minWidth:'80vw'}}>
       <Button className="p-2 m-1 flex-grow-1 bd-highlight">{title}</Button>
         <Button className="p-2 m-1 bd-highlight">Favorites</Button>
         <Button className="p-2 m-1 bd-highlight">Delete</Button>
         </ListGroupItem>
        
      </ListGroup>
   </div>
    );
  }
  
  export default ListItem;

