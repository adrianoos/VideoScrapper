import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import { onConfirm } from 'react-confirm-pro';
import { InputForm, NavButtons, VideoWrapper } from './components'
import { GetByIdYouTube } from './apis'
import { GetByIdVimeo } from './apis'
import { Pagination } from './components'
import { FetchData } from './components/FetchData.jsx'
import './App.css';

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
  FetchData(urls, setDisplay)
  localStorage.clear()
  window.localStorage.setItem('urlsStore', JSON.stringify(urls))
 }, [urls])

const DeleteFromList = (key) =>{
 const urlsList = display.filter(el => el.key !== key)
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
  switch(true) {
    case sort == false:
      setSort(!sort) 
      display.sort((a,b) => ( b.dateInMs - a.dateInMs))
      break;
    case sort == true:
      setSort(!sort)
      display.sort((a,b) => ( a.dateInMs - b.dateInMs))
      break;
  }
};



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

  return (
      <Container id='mainCnt'>
         <InputForm urls={urls} setUrls={setUrls}/>
            <NavButtons
             urls={urls}
             setUrls={setUrls}
             FavsToggle={FavoritesToggle}
             FavsDisplay={favsDisplay}
             SortbyDate={SortbyDate}
             Sort={sort}
             DeleteAll={DeleteAll}
             ChangeDisplay={ChangeDisplay}
             displayType={displayType}
             FetchData={FetchData}
             />
               <Pagination videosPerPage={videosPerPage} totalVideos={display.length} paginate={paginate} currentPage={currentPage}/>
             <VideoWrapper 
             display={currentItems}
             displayType={displayType}
             OnDelete={DeleteFromList}
             UpdateFavs={UpdateFavs}
             favsDisplay={FavoritesToggle}
            />
      </Container>
  );
}

export default App;
