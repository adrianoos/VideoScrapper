import React from 'react';
import { Pagination, PaginationItem, PaginationLink, Col, Row } from 'reactstrap';
import { VideoCard } from './'
import { ListItem } from './'

const VideoWrapper = ({display, OnDelete, UpdateFavs, favsDisplay, displayType}) => {

    const ThumbNails = display.map((item) => 
        <VideoCard
        key={item.date}
        date={item.date}
        title={ item.data ? item.data.title : ''}
        thumb={item.data ? item.data.thumbnail : 'https://via.placeholder.com/320x180?text=Incorrect ID'} 
        views={item.data ? item.data.views : ''}
        likes={item.data ? item.data.likes : ''}
        VideoId={item.data ? '' : item.ID}
        favs={item.favs}
        OnDelete={OnDelete}
        UpdateFavs={UpdateFavs}
        favsDisplay={favsDisplay}
        />)

      const ListItems = display.map((item) => 
      <ListItem
      key={item.date}
      date={item.date}
      title={ item.data ? item.data.title : ''}
      thumb={item.data ? item.data.thumbnail : 'https://via.placeholder.com/320x180?text=Incorrect ID'} 
      views={item.data ? item.data.views : ''}
      likes={item.data ? item.data.likes : ''}
      VideoId={item.data ? '' : item.ID}
      favs={item.favs}
      OnDelete={OnDelete}
      UpdateFavs={UpdateFavs}
      favsDisplay={favsDisplay}
      />
      )
      

    return (
   <div className="VideoWrapper">
       <Col>
       
       <Row>
       {displayType ? ListItems : ThumbNails }
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
  
