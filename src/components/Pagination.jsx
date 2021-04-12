 import React from 'react'
 import { Container, Button} from 'reactstrap';
 
 export const Pagination = ({ videosPerPage, totalVideos, paginate, currentPage }) => {
     const pageNumbers = []
console.log(currentPage)
     for (let i = 1; i <= Math.ceil(totalVideos / videosPerPage); i++) {
         pageNumbers.push(i)
     }
     return (
         
            <Container>
                 {pageNumbers.map( number => (
                     <span>
                         { currentPage === number ? <Button className='m-2' style={{background: 'lightblue'}} key={number} onClick={()=> paginate(number)} href='!#'>
                       {number} 
                     </Button> : 
                     <Button className='m-2' key={number} onClick={()=> paginate(number)} href='!#'>
                     {number} 
                   </Button>
                     }
                     
                     </span>
                 ))}
             </Container>
     
     )
 };

 

 
 
