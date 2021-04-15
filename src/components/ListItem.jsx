import React from 'react';
import VideoPlayBack from './VideoPlayBack'
import { Button, ListGroup, ListGroupItem, Row} from 'reactstrap';
import { Icon} from '@iconify/react';
import vimeoIcon from '@iconify-icons/logos/vimeo-icon';
import youtubeIcon from '@iconify-icons/logos/youtube-icon';


const ListItem = ({title, favs, UpdateFavs, date, OnDelete, PlayBackId, url, ID }) => {
    return (
  <ListGroup className='shadow m-1' id='ListItem'>
      <ListGroupItem className="d-flex bd-highlight" style={{background: 'darkgrey', minWidth:'80vw'}}>
        { title ? <VideoPlayBack buttonLabel={title} className='flex-grow-1 bd-highlight' videoId={PlayBackId} url={url} btn={true}/> :
          <Button style={{width: '60vw'}}className="m-1 bd-highlight">Incorect Video ID</Button>}
          { date ?
            <Row>
             { url.includes('youtu') ? <Icon icon={youtubeIcon} data-icon="line-md:image-twotone"/> : <Icon icon={vimeoIcon} /> }
             </Row> : ''}
          { date ? <span>
          {favs ? <Button className="shadow p-2 m-1 bd-highlight" style={{background:'lightblue'}} onClick={() => UpdateFavs(date)}>Favorites</Button> :
            <Button className="shadow p-2 m-1 bd-highlight" onClick={() => UpdateFavs(date)}>Favorites</Button>}
             </span> : '' }
          { date && <Button className="shadow p-2 m-1 bd-highlight" onClick={() => OnDelete(ID)}>Delete</Button>}
      </ListGroupItem>
    </ListGroup>
   
    );
  }
  
  export default ListItem;
