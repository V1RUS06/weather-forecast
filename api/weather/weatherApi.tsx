import axios from "axios";


const API_KEY = '372a36eac31020f9cd2cea5c2bf64132'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

export const getWeather = async (longitude: number, latitude: number) => {
  return await axios.get(`${BASE_URL}weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    .then(res => res.data)
}

