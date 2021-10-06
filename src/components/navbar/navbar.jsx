import { useEffect } from 'react'
import './nav.scss'
import { useState } from 'react'
import { getWeather } from './weather'
import { useDispatch } from 'react-redux'
import { setLanguage } from '../../redux/reducer'
import { useSelector } from 'react-redux'


export const Navbar = () => {
    const dispatch = useDispatch()
    const [weather, setWeather] = useState({})
    const [date, setDate] = useState('')
    const { language } = useSelector(({ ItemReducer }) => ItemReducer)


    useEffect(() => {
        getWeather().then(data => setWeather(data))
        const getDate = new Date().toLocaleDateString()
        setDate(getDate)
    }, [])





    return (
        <div className="nav">
            <div className="time__weather">
                <div className="time">
                    {new Date().toLocaleTimeString().slice(0, 5)}
                </div>
                {weather &&
                    <div className="weather">
                        {weather.temp}&#8451;
                        <img className="icon" src={weather.icon} alt="" />
                    </div>
                }
            </div>
            <div className="right__side">
                <div className="date">
                    {date}
                </div>
                <div className="lang__block">
                    <div className={language === 'eng' ? 'eng active' : 'eng'} onClick={() => dispatch(setLanguage('eng'))}>eng</div>
                    <div className={language === 'rus' ? 'rus active' : 'rus'} onClick={() => dispatch(setLanguage('rus'))}>рус</div>
                </div>
            </div>
        </div>
    )
}