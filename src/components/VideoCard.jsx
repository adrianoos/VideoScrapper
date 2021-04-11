import React from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row } from 'reactstrap';

const VideoCard = ({title, thumb, views, favs, likes, OnDelete, date, VideoId, UpdateFavs, favsDisplay}) => {

    return (
// jeśli favsDisplay będzie true
// to elementy które mają favs mają być widoczne 
// bez favsDisplay wszystkie są widoczne
   <div className="VideoCard">
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', height:'100%'}}>
          <CardImg top width="100%" src={thumb} alt="Card image cap"/>
            <CardBody>
               {title ? <CardTitle tag="h6">TITLE: {title}</CardTitle> : ''}
               {views ? <CardSubtitle tag="h6" className="mb-2 text-muted">Views: {views}</CardSubtitle> : ''} 
               { likes ? <CardText>Likes: {likes}</CardText> : ''}
               { VideoId ? <CardText>Sorry video id: <strong>"{VideoId}"</strong> is incorrect</CardText> : '' }
               { date ? <CardText>Added: {date}</CardText> : '' }
                  <Row form>

                    <Col md={3}>
                       { likes ? <Button>Play</Button> : '' }
                    </Col>
                       {likes ?
                    <Col>
                       { favs ? <Button style={{background:'lightblue'}} onClick={() => UpdateFavs(date)}>Favorites</Button> :
                       <Button onClick={() => UpdateFavs(date)}>Favorites</Button>
                       }
                    </Col> : ''
                       }
                    <Col>
                       { likes ? <Button onClick={() => OnDelete(date)}>Delete</Button> :
                       <Button style={{backgroundColor: 'red'}} onClick={() => OnDelete(date)}>Delete</Button>}
                    </Col>
                  </Row>
            </CardBody>
        </Card> 

   </div>
    );
  }
  
  export default VideoCard;

