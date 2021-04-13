import { useState } from 'react'

const useForm = (ValidateInfo, urls, setUrls) =>{
const [inpValue, setInpValue ] = useState([])
const [errors, setErrors] = useState([])


const UpdateInput = e => {
    setInpValue(e.target.value)
};

const getUrl = (e) => {
    const ID = Date.now()
    const date = new Date(ID).toLocaleString()
    const newItem = {url: inpValue, date: date, favs: false }
    e.preventDefault()
    setInpValue('')
    setErrors(ValidateInfo(inpValue))
    
if (ValidateInfo(inpValue) === ""){
        
let storage = JSON.parse(window.localStorage.getItem('urlsStore'))
if (storage === null) {
let storage = []
storage.push(newItem)
window.localStorage.setItem('urlsStore', JSON.stringify(storage))

} else {
storage.push(newItem)
window.localStorage.setItem('urlsStore', JSON.stringify(storage))
}
        
setUrls(urls.concat(newItem))

 }
};

return {UpdateInput, getUrl, inpValue, errors }

}


export default useForm;