import React from 'react';
import VideoPlayBack from './VideoPlayBack'
import { Button, ListGroup, ListGroupItem, Row} from 'reactstrap';
import { Icon} from '@iconify/react';
import vimeoIcon from '@iconify-icons/logos/vimeo-icon';
import youtubeIcon from '@iconify-icons/logos/youtube-icon';


const ListItem = ({title, favs, UpdateFavs, date, likes, OnDelete, PlayBackId, url, data, Col}) => {
    return (
  <ListGroup className='shadow m-1'>
      <ListGroupItem className="d-flex bd-highlight" style={{background: 'darkgrey', minWidth:'80vw'}}>
        { title ? <VideoPlayBack buttonLabel={title} className='flex-grow-1 bd-highlight' videoId={PlayBackId} url={url}/> :
          <Button style={{width: '60vw'}}className="m-1 bd-highlight">Incorect Video ID</Button>}
          { data ?
            <Row>
             { url.includes('youtu') ? <Icon icon={youtubeIcon} data-icon="line-md:image-twotone"/> : <Icon icon={vimeoIcon} /> }
             </Row> : ''}
          { data ? <span>
          {favs ? <Button className="shadow p-2 m-1 bd-highlight" style={{background:'lightblue'}} onClick={() => UpdateFavs(date)}>Favorites</Button> :
            <Button className="shadow p-2 m-1 bd-highlight" onClick={() => UpdateFavs(date)}>Favorites</Button>}
             </span> : '' }
          { likes ? <Button className="shadow p-2 m-1 bd-highlight" onClick={() => OnDelete(date)}>Delete</Button> :
                    <Button className="shadow p-2 m-1 bd-highlight" style={{backgroundColor: 'red'}} onClick={() => OnDelete(date)}>Delete</Button>}
      </ListGroupItem>
    </ListGroup>
   
    );
  }
  
  export default ListItem;
