import axios from 'axios';

const GetByIdYouTube = async (ID) => {
    try {
const key = "AIzaSyC6crZwFj1dv0BJOd0JjoyZA0Amqtl8R7o"
const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${ID}&key=${key}`)
const resp2 = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${ID}&key=${key}`)
const mofifiedResponse = {
    title: response.data.items[0].snippet.title,
    thumbnail:response.data.items[0].snippet.thumbnails.medium.url,
    likes: resp2.data.items[0].statistics.likeCount,
    views: resp2.data.items[0].statistics.viewCount
}
return mofifiedResponse

} catch (error) {
    if (error) {
        return
    }
}
};

export default GetByIdYouTube

