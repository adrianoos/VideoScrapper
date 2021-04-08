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
       let favs = item.favs

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
       const newItem = { data, url, date, ID, favs };
       newArr.push(newItem)
    
}

setDisplay(newArr)

};

const DeleteFromList = (date) =>{
 const urlsList = urls.filter(el => el.date !== date) // filtruj urls/ wez wszystkie "el" zwróc => wszystkie z ID które nie równa się ID wchodzącemu
 setUrls(urlsList)
 localStorage.clear()
 window.localStorage.setItem('urlsStore', JSON.stringify(urlsList))
};

const UpdateFavs = (date) =>{
  const clickedIndex = urls.findIndex((el) => (el.date === date))// tablica z klikniętym obiektem
  let newAr = [...urls]
  newAr[clickedIndex] = {...newAr[clickedIndex], favs: !newAr[clickedIndex].favs}

setUrls(newAr)

localStorage.clear()
window.localStorage.setItem('urlsStore', JSON.stringify(newAr))

console.log(urls)
}

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
        UpdateFavs={UpdateFavs}
        />
      </Col>
    </div>
  );
}


export default App;
