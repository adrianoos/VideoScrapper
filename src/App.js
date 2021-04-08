import React, { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import './App.css';
import { InputForm, NavButtons, VideoWrapper } from './components'
import { GetByIdYouTube } from './apis'
import { GetByIdVimeo } from './apis'

const App = () => {
const savedVideos = JSON.parse(localStorage.getItem('urlsStore'))

  const [urls , setUrls ] = useState(savedVideos || [])
  const [display, setDisplay] = useState([])

useEffect(() => {
  FetchData(urls)
 }, [urls])



 const FetchData = async (urls) =>{
   const newArr = []

  for (const item of urls) {
       const url = item.url
       let ID =''
       let response = ''
      
      if (url.includes("youtu") && url.length > 30) {
        ID = url.slice(url.search("=", 0) + 1, url.length);
        response = GetByIdYouTube(ID);

       } else if (url.includes("youtu") && url.length < 30) {
         ID = url.slice(url.search(".be", 0) + 4, url.length)
         response = GetByIdYouTube(ID);

       } else if (url.includes("vimeo",0)) {
        ID = url.slice(url.search("com", 0) + 4, url.length)
        response = GetByIdVimeo(ID);
       }
       
       const data = await response;
       const date = item.date;
       const newItem = { data, url, date, ID };
       newArr.push(newItem)
    
}

setDisplay(newArr)

};

const DeleteFromList = (date) =>{
 const urlsList = urls.filter(el => el.date !== date)
 const DisplayList = display.filter(el => el.date !== date)
 setUrls(urlsList)
 setDisplay(DisplayList)
 localStorage.clear()
 window.localStorage.setItem('urlsStore', JSON.stringify(urlsList))

};

  return (
    <div className="App">
      <Col>
        <Col class="row mx-md-n5">
        <InputForm urls={urls} setUrls={setUrls}/>
        </Col>
         <Row >
          <Col>
            <NavButtons />
          </Col>
         </Row>
        <VideoWrapper 
        display={display}
        OnDelete={DeleteFromList}
        />
      </Col>
    </div>
  );
}


export default App;
