import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row } from 'reactstrap';
import VideoPlayBack from './VideoPlayBack'

const VideoCard = ({title, thumb, views, favs, likes, OnDelete, date, VideoId, UpdateFavs, PlayBackId, url}) => {
   
  

    return (
   <div className="VideoCard">
        <Card className="d-flex bd-highlight" body inverse style={{ backgroundColor: '#333', height:'100%'}}>
          <CardImg className="m-1 flex-grow-1 bd-highlight" top width="100%" src={thumb} alt="Card image cap"/>
            <CardBody className="m-1 bd-highlight" >
               {title ? <CardTitle tag="h6">TITLE: {title}</CardTitle> : ''}
               {views ? <CardSubtitle tag="h6" className="mb-2 text-muted">Views: {views}</CardSubtitle> : ''} 
               { likes ? <CardText>Likes: {likes}</CardText> : ''}
               { VideoId ? <CardText>Sorry video id: <strong>"{VideoId}"</strong> is incorrect</CardText> : '' }
               { date ? <CardText>Added: {date}</CardText> : '' }
            </CardBody>
              <Row form>
                <Col>
                { likes ?  <VideoPlayBack buttonLabel={'Play'} videoId={PlayBackId} url={url}/> : ''}
               </Col>
                {likes ?
               <Col>
               { favs ? <Button style={{background:'lightblue'}} onClick={() => UpdateFavs(date)}>Favorites</Button> :
               <Button onClick={() => UpdateFavs(date)}>Favorites</Button>}
               </Col> : ''}
               <Col>
               { likes ? <Button onClick={() => OnDelete(date)}>Delete</Button> :
               <Button style={{backgroundColor: 'red'}} onClick={() => OnDelete(date)}>Delete</Button>}
               </Col>
              </Row>
            </Card> 
   </div>
    );
  }
  
  export default VideoCard;

