
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Input, Container } from 'reactstrap';

export const Upload = (props) => {
 const { buttonLabel, urls, setUrls, className } = props;
 const [modal, setModal] = useState(false);
 const toggle = () => setModal(!modal);
    
const uploadFile = (e) =>{
  let reader = new FileReader();
  reader.onload = onReaderLoad;
  reader.readAsText(e.target.files[0]);
};

const onReaderLoad = (e) =>{
let loadedArray = JSON.parse(e.target.result);
let ObjArray = []
for (let item of loadedArray) {
    const ID = Date.now()
    const date = new Date(ID).toLocaleString()
    const newItem = {url: item, date: date, favs: false }
    ObjArray.push(newItem)
}
setUrls(urls.concat(ObjArray))
toggle()
};


    return (
    <Container id='uplContainer'>
        <Button className={className} id='uplButton' onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle} style={{width: '30vw', height: '10vh'}}>
          <ModalHeader toggle={toggle}>Upload Video IDs or URLS from JSON File format ['id1', 'id2', 'etc']</ModalHeader>
          <ModalBody style={{minHeight: '10vh'}}>
          <Input type="file" name="file" id="exampleFile" onChange={uploadFile} toggle={toggle} />
          </ModalBody>
        </Modal>
    </Container>
    )
}
