import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row } from 'reactstrap';
import VideoPlayBack from './VideoPlayBack'

const VideoCard = ({title, thumb, views, favs, likes, OnDelete, date, VideoId, UpdateFavs, PlayBackId, url}) => {
   
  

    return (
   
        <Card className="shadow d-flex bd-highlight m-1" body inverse style={{maxHeight:'65vh', maxWidth: '22vw', background: 'grey'}}>
          <CardImg className="shadow m-1 flex-grow-1 bd-highlight" top width="100%" src={thumb} alt="Card image cap"/>
            <CardBody className="m-1 bd-highlight" >
               { title ? <CardTitle tag="h6">TITLE: {title}</CardTitle> : ''}
               { views ? <CardText>Views: {views}</CardText> : ''} 
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
               { favs ? <Button className='shadow btn btn-outline-dark' style={{background:'lightblue'}} onClick={() => UpdateFavs(date)}>Favorites</Button> :
               <Button className='shadow btn btn-outline-dark' onClick={() => UpdateFavs(date)}>Favorites</Button>}
               </Col> : ''}
               <Col>
               { likes ? <Button className='shadow btn btn-outline-dark' onClick={() => OnDelete(date)}>Delete</Button> :
               <Button className='shadow btn btn-outline-dark' style={{backgroundColor: 'red'}} onClick={() => OnDelete(date)}>Delete</Button>}
               </Col>
              </Row>
            </Card> 
           
    );
  }
  
  export default VideoCard;

