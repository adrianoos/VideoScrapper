 import React from 'react'
 import { Container, Button} from 'reactstrap';
 
 export const Pagination = ({ videosPerPage, totalVideos, paginate, currentPage }) => {
     const pageNumbers = []
     for (let i = 1; i <= Math.ceil(totalVideos / videosPerPage); i++) {
         pageNumbers.push(i)
     }
     return (
      <Container className="d-flex justify-content-center" id='paginCnt'>
          {pageNumbers.map( number => (
          <span key={number}>
           { currentPage === number ?
           <Button className='shadow m-2' style={{background: 'lightblue'}} onClick={()=> paginate(number)} href='!#'>
           {number}</Button> : 
           <Button className='shadow m-2' onClick={()=> paginate(number)} href='!#'>
           {number}</Button>}
          </span>
          ))}
      </Container>
     )
 };
 export default Pagination;

 

 
 
