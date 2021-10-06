import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import './page.scss'
import back from '../../../../static/icons/back.png'
import home from '../../../../static/icons/home.png'
import { NavLink } from 'react-router-dom'


export const Page = (props) => {
    const { currentPage } = useSelector(({ ItemReducer }) => ItemReducer)
    const { pageName } = useParams()
    return (
        <div className="page">
            <div className="header__page"> 
                <NavLink to='/' className="back">
                    <img src={home} alt="" />
                </NavLink>
                <h2>{pageName}</h2>
                <button onClick={() => props.history.goBack()} className="back">
                    <img src={back} alt="" />
                </button>
            </div>
            <div className="content__page">
                <p className="text__page">
                    {currentPage.text}
                </p>
            </div>

        </div>
    )
}