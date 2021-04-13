import React, { useState, useEffect } from 'react';
import { Col, Row, Container } from 'reactstrap';
import { onConfirm } from 'react-confirm-pro';
import './App.css';
import { InputForm, NavButtons, VideoWrapper } from './components'
import { GetByIdYouTube } from './apis'
import { GetByIdVimeo } from './apis'
import { Pagination } from './components/Pagination'

const App = () => {
const savedVideos = JSON.parse(localStorage.getItem('urlsStore'))

  const [urls , setUrls ] = useState(savedVideos || [])
  const [display, setDisplay] = useState([])
  const [dispBackUp, setDispBackUp] = useState([])
  const [favsDisplay, setFavsDisplay ] = useState(false)
  const [sort, setSort] = useState(false)
  const [displayType, setDisplayType] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [videosPerPage] = useState(6)
 

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
       let isnum = /^\d+$/.test(url);

       // NOW:
// DLA YT sprawdza czy zawiera youtu i jest dłuższy niż 30 lub krótszy niż 30 długi i krótki link
// wystarczyło by dodać na początku jeśli url.length < 13 i zawiera literę lub _ to procesujemy YT fetchem
// jeśli nie zawiera same cyfry procesujemy vimeo fetchem

      if (url.length < 13 && isnum) {
        ID = url
        response = GetByIdVimeo(ID);

      } else if (url.length < 13 && !isnum) {
        ID = url
        response = GetByIdYouTube(ID)
      } else if (url.includes("youtu") && url.length > 30) {
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
       const newItem = { data, url, date, ID, favs }
      
     newArr.push(newItem)
       
}
setDisplay(newArr)
console.log(display)
};

const DeleteFromList = (date) =>{
 const urlsList = urls.filter(el => el.date !== date)
 setUrls(urlsList)
 localStorage.clear()
 window.localStorage.setItem('urlsStore', JSON.stringify(urlsList))
};

const UpdateFavs = (date) =>{
  const clickedIndex = urls.findIndex((el) => (el.date === date))
  let newAr = [...urls]
  newAr[clickedIndex] = {...newAr[clickedIndex], favs: !newAr[clickedIndex].favs}

  setUrls(newAr)
  localStorage.clear()
  window.localStorage.setItem('urlsStore', JSON.stringify(newAr))
};

const FavoritesToggle = () =>{
  setFavsDisplay(!favsDisplay)
const favsArr = display.filter( item => item.favs === true)
setDispBackUp(display)
 favsDisplay ? setDisplay(dispBackUp) : setDisplay(favsArr)
};

const SortbyDate = () =>{
  setSort(!sort)
  display.reverse()
}

const DeleteAll = async () =>{
  onConfirm({
    title: (
      <h3>
        Are you sure?
      </h3>
    ),
    description: (
      <p>This process cannot be undone.</p>
    ),
    onSubmit: () => {
      localStorage.clear()
  setUrls([])
  setDisplay([])
    },
    onCancel: () => {
    },
  })
};

const ChangeDisplay= () =>{
setDisplayType(!displayType)
};

const indexOfLastItem = currentPage * videosPerPage;
const indexOfFirstItem = indexOfLastItem - videosPerPage;
const currentItems = display.slice(indexOfFirstItem, indexOfLastItem)

const paginate = (pageNumber) => setCurrentPage(pageNumber)

// do wrappera przekaż tylko wycinek daty

  return (
   
      <Container>
      <Col>
          <Col>
            <InputForm urls={urls} setUrls={setUrls}/>
          </Col>
            <Row >
              <Col>
                <NavButtons 
                  FavsToggle={FavoritesToggle}
                  FavsDisplay={favsDisplay}
                  SortbyDate={SortbyDate}
                  Sort={sort}
                  DeleteAll={DeleteAll}
                  ChangeDisplay={ChangeDisplay}
                  displayType={displayType}
                />
              </Col>
              <Pagination videosPerPage={videosPerPage} totalVideos={display.length} paginate={paginate} currentPage={currentPage}/>
            </Row>
         <VideoWrapper 
          display={currentItems}
          displayType={displayType}
          OnDelete={DeleteFromList}
          UpdateFavs={UpdateFavs}
          favsDisplay={FavoritesToggle}
         />
        
      </Col>
      </Container>
      
      
     
  );
}


export default App;
