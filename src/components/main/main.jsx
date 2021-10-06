import './main.scss'
import { rusList } from '../../data/data'
import { engList } from '../../data/dataeng'
import { ListItem } from './listitem/listItem'
import { useSelector } from 'react-redux'



export const Main = () => {
    // const dispatch = useDispat
    const { language } = useSelector(({ ItemReducer }) => ItemReducer)

    return (
        <div className="main">
            <div className="listitem">
                {language === 'rus' ?
                    rusList.map(item =>
                        <ListItem key={item.name} item={item} />
                    ) :
                    engList.map(item =>
                        <ListItem key={item.name} item={item} />
                    )
                }
            </div>

        </div>
    )
}