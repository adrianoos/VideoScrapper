import React, { useState } from 'react';

import { Button, Modal, ModalHeader, ModalFooter, ModalBody, CardImg} from 'reactstrap';

const VideoPlayBack = (props) => {
     const {
          buttonLabel,
          className,
          videoId, 
          url, 
          Imgsrc,
          btn
       } = props;
      
        const [modal, setModal] = useState(false);
        const toggle = () => setModal(!modal);
        const videoSrcYT = `https://www.youtube.com/embed/${videoId}`;
        const videoSrcVimeo = `https://player.vimeo.com/video/${videoId}`
        const  isnum = /^\d+$/.test(url);
        let src =''
        { url.includes('vimeo') || isnum ? src=videoSrcVimeo : src=videoSrcYT}
      
        return (
         <div className={className}>
{btn ? <Button className='shadow btn btn-outline-dark' style={{minWidth:'6vw'}} onClick={toggle}>{buttonLabel}</Button> :
<CardImg className="shadow m-1 flex-grow-1 bd-highlight" top width="100%" src={Imgsrc} onClick={toggle} alt="Card image cap" style={{cursor:'pointer'}}/>}
            <Modal isOpen={modal} toggle={toggle} style={{minWidth: '80vw'}}>
              <ModalHeader toggle={toggle}></ModalHeader>
              <ModalBody style={{minHeight: '80vh'}}>
              <iframe
                 frameBorder="0"
                 height="550vh"
                 width="100%"
                 title="Video Player"
                 src={src}
              />
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </Modal>
            </div>
        );
      }
      
  
  export default VideoPlayBack;

