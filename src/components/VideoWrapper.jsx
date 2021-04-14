import React from 'react';
import { Col, Row } from 'reactstrap';
import { VideoCard } from './'
import { ListItem } from './'

const VideoWrapper = ({display, OnDelete, UpdateFavs, favsDisplay, displayType}) => {
    const ThumbNails = display.map((item) => 
        <VideoCard
        key={item.key}
        date={item.date}
        title={ item.data ? item.data.title : ''}
        thumb={item.data ? item.data.thumbnail : 'https://via.placeholder.com/320x180?text=Incorrect ID'} 
        views={item.data ? item.data.views : ''}
        likes={item.data ? item.data.likes : ''}
        VideoId={item.data ? '' : item.ID}
        PlayBackId={item.ID}
        favs={item.favs}
        OnDelete={OnDelete}
        UpdateFavs={UpdateFavs}
        favsDisplay={favsDisplay}
        url={item.data ? item.url : ''}
        ID={item.key}
        />)
        
      const ListItems = display.map((item) => 
      <ListItem
      key={item.key}
      date={item.date}
      title={ item.data ? item.data.title : ''}
      thumb={item.data ? item.data.thumbnail : 'https://via.placeholder.com/320x180?text=Incorrect ID'} 
      views={item.data ? item.data.views : ''}
      likes={item.data ? item.data.likes : ''}
      VideoId={item.data ? '' : item.ID}
      PlayBackId={item.ID}
      favs={item.favs}
      OnDelete={OnDelete}
      UpdateFavs={UpdateFavs}
      favsDisplay={favsDisplay}
      url={item.data ? item.url : ''}
      ID={item.key}
      />
      )
      
    return (
   <div className="VideoWrapper">
       <Col>
       <Row className="d-flex justify-content-center">
       {displayType ? ListItems : ThumbNails }
       </Row>
       </Col>
   </div>
    );
  }
  
  export default VideoWrapper;
  
