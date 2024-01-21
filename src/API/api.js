import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.unsplash.com/photos',
    headers: {
        Authorization: 'Client-ID zeKo-44YgyJ7cLcKxc0In1E1MKkn-vjM3WPmZS49168'
    }
})

//THIS DID NOT WORK. I HAD TO SET IT TO A VARIABLE
// export default {
//     async function fetchData(){
//         return await axiosInstance.get('/random')
//     }
// };
export const fetchData = async () => {
    console.log("made it to api.js")
    return await axiosInstance.get('/random');
};
