
export default function ValidateInfo (values) {
    let errors = {}
        const UrlPatterns = ["https://www.youtube.com/watch?v=", "https://vimeo.com/", "https://youtu.be/"]
        const badUrl = () => (errors = "Sorry URL or ID is Incorrect")
        const urlOk = () => (errors = "")
        UrlPatterns.some(el => values.includes(el)) || values.length > 6 && values.length < 12 ? urlOk() : badUrl()
      
 return errors
};

