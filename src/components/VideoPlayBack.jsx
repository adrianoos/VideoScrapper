import React, { useState } from 'react';

import { Button, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';

const VideoPlayBack = (props) => {
     const {
          buttonLabel,
          className,
          videoId, 
          url
       } = props;
      
        const [modal, setModal] = useState(false);
        const toggle = () => setModal(!modal);
        const videoSrcYT = `https://www.youtube.com/embed/${videoId}`;
        const videoSrcVimeo = `https://player.vimeo.com/video/${videoId}`
        let src =''
        { url.includes('youtu') ? src=videoSrcYT : src=videoSrcVimeo}
      
        return (
         <div className={className}>
            <Button className='shadow btn btn-outline-dark' style={{minWidth:'6vw'}} onClick={toggle}>{buttonLabel}</Button>
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

