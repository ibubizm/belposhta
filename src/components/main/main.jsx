import './main.scss'
import { ListItem } from './listitem/listItem'
import { useSelector } from 'react-redux'



export const Main = () => {
    const { data } = useSelector(({ ItemReducer }) => ItemReducer)

    return (
        <div className="main">
            <div className="listitem">
                {
                    data.map((item, index) =>
                        <ListItem index={index} key={item.name} item={item} />
                    )
                }
            </div>

        </div>
    )
}