import { useState } from 'react'

const useForm = (ValidateInfo, urls, setUrls) =>{
const [inpValue, setInpValue ] = useState([])
const [errors, setErrors] = useState([])

const UpdateInput = e => {
    setInpValue(e.target.value)
};

const  getUrl = (e) => {
    e.preventDefault()
    const ID = Date.now()
    const date = new Date(ID).toLocaleString()
    const newItem = {url: inpValue, date: date, favs: false }
    setInpValue('')
    setErrors(ValidateInfo(inpValue))

if (ValidateInfo(inpValue) === "") {        
setUrls(urls.concat(newItem))
 }
};
return { UpdateInput, getUrl, inpValue, errors, setErrors }
};


export default useForm;