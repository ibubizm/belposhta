import './listItem.scss'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getChildItems } from '../../../redux/reducer'




export const ListItem = ({ item, index }) => {
    const dispatch = useDispatch()


    const dis = () => {
        dispatch(getChildItems(item))
    }

    return (
        <NavLink onClick={dis} className="navlink" to={`list`}>
            <div className="item">
                <div className="title">
                    {item.name}
                </div>
                <img className="item__icon" src={item.icon} alt="" />
            </div>
        </NavLink>

    )
}