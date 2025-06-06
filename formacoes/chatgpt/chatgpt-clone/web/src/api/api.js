import axios from 'axios';
const URL_API = 'http://localhost:5555/api/prompt'


export const makeRequest = async (message) => {
  const {data} = await axios.post(URL_API, message, {
    headers: { "Content-Type": "application/json" }
  })
 
  return data
}