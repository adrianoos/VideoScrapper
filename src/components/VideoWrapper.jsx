import React from 'react';
import { Pagination, PaginationItem, PaginationLink, Col, Row } from 'reactstrap';
import { VideoCard } from './'

const VideoWrapper = ({display, OnDelete, UpdateFavs}) => {
//console.log(display)
    const mappedVideos = display.map((item) => 
       ( <VideoCard
        key={item.date}
        date={item.date}
        title={ item.data ? item.data.title : ''} // tego nie dostaje 
        thumb={item.data ? item.data.thumbnail : 'https://via.placeholder.com/320x180?text=Incorrect ID'} // brak
        views={item.data ? item.data.views : ''} // brak
        likes={item.data ? item.data.likes : ''} // brak
        VideoId={item.data ? '' : item.ID}
        favs={item.favs}
        OnDelete={OnDelete}
        UpdateFavs={UpdateFavs}
        />)
      )

    return (
   <div className="VideoWrapper">
       <Col>
       <Row>
       {mappedVideos}
       </Row>
       <Pagination aria-label="Page navigation example" style={{alignSelf: 'flex-end'}}>
       <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationLink href="#">
          1
        </PaginationLink>
        <PaginationLink href="#">
          2
        </PaginationLink>
        <PaginationLink href="#">
          3
        </PaginationLink>
        <PaginationLink last href="#" />
       </Pagination>
       </Col>
   
   </div>
    );
  }
  
  export default VideoWrapper;
  

  // Tu będą przyciski paginacyjne jeśli elementy nie będą się mieścić



