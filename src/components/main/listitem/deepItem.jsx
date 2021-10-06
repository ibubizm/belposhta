import './listItem.scss'
import { NavLink } from 'react-router-dom'
import { DeepList } from './deeplist'
import { useDispatch } from 'react-redux'
import { getCurrentPage } from '../../../redux/reducer'



export const DeepItem = ({ item }) => {
    const dispatch = useDispatch()

    const dis = () => {
        dispatch(getCurrentPage(item.content))
    }

    return (
        <NavLink onClick={dis} className="navlink" to={`list/${item.name}`}>
            <div className="item">
                <div className="title">
                    {item.name}
                </div>
                <img className="item__icon" src={item.icon} alt="" />
            </div>
        </NavLink>


    )
}