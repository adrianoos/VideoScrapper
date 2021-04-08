export default function ValidateInfo(values) {
    let errors = {}
        const UrlPatterns = ["https://www.youtube.com/watch?v=", "https://vimeo.com/", "https://youtu.be/"]
        const badUrl = () => (errors = "Sorry incorrect URL")
        const urlOk = () => (errors = "")
        !UrlPatterns.some(el => values.includes(el)) && badUrl()
         UrlPatterns.some(el => values.includes(el)) && urlOk()

 return errors
};
