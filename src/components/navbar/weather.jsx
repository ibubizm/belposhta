import axios from 'axios'
const key = 'dc6be4480cc118d8e566b7b73780141c'

export const getWeather = async () => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=minsk&appid=${key}`)
    let urlIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const obj = {
        temp: Math.round(data.main.temp - 273),
        icon: urlIcon
    }
    return obj
}