import data from '@iconify-icons/logos/youtube-icon';
import React from 'react';
import { Card, CardText, CardBody, CardTitle, Button, Col, Row } from 'reactstrap';
import VideoPlayBack from './VideoPlayBack'
 
const VideoCard = ({title, thumb, views, favs, likes, OnDelete, date, VideoId, UpdateFavs, PlayBackId, url, ID}) => {
 
    return (
    <Card className="shadow m-1" id='VideoCard'>
         <VideoPlayBack videoId={PlayBackId} url={url} Imgsrc={thumb} btn={false}/>
          <CardBody className="m-1 bd-highlight" id={'cardBody'}>
          { title ? <CardTitle tag="h6">TITLE: {title}</CardTitle> : ''}
          { views ? <CardText>Views: {views}</CardText> : ''} 
          { likes ? <CardText>Likes: {likes}</CardText> : ''}
          { VideoId ? <CardText>Sorry video id: <strong>"{VideoId}"</strong> is incorrect</CardText> : '' }
          { date ? <CardText>Added: {date}</CardText> : '' }
          </CardBody>
             <Row form>
                 { title ? 
                 <Col>
                 { data ?  <VideoPlayBack buttonLabel={'Play'} videoId={PlayBackId} url={url} btn={true}/> : ''}
                 </Col> : '' }
                 { title ?
                 <Col>
                   { favs ? <Button className='shadow btn btn-outline-dark' style={{background:'lightblue'}} onClick={() => UpdateFavs(date)}>Favorites</Button> :
                  <Button className='shadow btn btn-outline-dark' onClick={() => UpdateFavs(date)}>Favorites</Button>}
                 </Col> : ''}
                 <Col>
                   { title ? <Button className='shadow btn btn-outline-dark' onClick={() => OnDelete(ID)}>Delete</Button> :
                   <Button className='shadow btn btn-outline-dark' style={{backgroundColor: 'red'}} onClick={() => OnDelete(ID)}>Delete</Button>}
                 </Col>
            </Row>
      </Card> 
      
    );
  }
  
  export default VideoCard;

