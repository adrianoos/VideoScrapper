import React from 'react'
import { GetByIdVimeo } from '../apis'
import { GetByIdYouTube } from '../apis'

 export const FetchData = async (urls, setDisplay) =>{
  const newArr = []
  const urlsArray = urls
   for (const item of urlsArray) {
       const url = item.url
       let ID =''
       let response = ''
       let favs = item.favs
       let isnum = /^\d+$/.test(url);

switch (true) {

    case url.length < 13 && isnum:
    ID = url
    response = GetByIdVimeo(ID)
    break;
 
    case url.length < 13 && !isnum:
    ID = url
    response = GetByIdYouTube(ID)
    break;

    case url.includes("youtu") && url.length > 30:
    ID = url.slice(url.search("=", 0) + 1, url.length)
    response = GetByIdYouTube(ID)
    break;

    case url.includes("youtu") && url.length < 30:
    ID = url.slice(url.search(".be", 0) + 4, url.length)
    response = GetByIdYouTube(ID);
    break;

    case url.includes("vimeo",0):
    ID = url.slice(url.search("com", 0) + 4, url.length)
    response = GetByIdVimeo(ID);

};
       const data = await response;
       const date = item.date;
       const dateInMs = item.dateInMs;
       const key = parseInt(ID, 36) * Date.now()
       let newItem = { data, url, date, ID, favs, key, dateInMs }
     newArr.push(newItem)   
}
setDisplay(newArr)
};
