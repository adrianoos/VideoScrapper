import axios from 'axios';

const GetByIdVimeo = async (ID) => {
   try {
    const Token = process.env.REACT_APP_VIMEO_KEY
    const response = await axios.get(`https://api.vimeo.com/videos/${ID}`, {
       headers: {
       Authorization: `Bearer ${Token}`,
        },
       }
      )
     const mofifiedResponse = {
       title: response.data.name,
       thumbnail:response.data.pictures.sizes[2].link,
       likes: response.data.metadata.connections.likes.total,
       views: ''
     }; 
    return mofifiedResponse;
   } catch (error) {
     console.log(error)
   }
};

export default GetByIdVimeo;
