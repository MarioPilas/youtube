import axios from 'axios';

const KEY = 'AIzaSyCNBvu9Qai1WfbEi9XMW7UMjax3G2bQVeY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
        
    }
    

});