import './listItem.scss'
import back from '../../../static/icons/back.png'
import { DeepItem } from './deepItem'
import { useSelector } from 'react-redux'

export const DeepList = (props) => {
    const { currentDir } = useSelector(({ ItemReducer }) => ItemReducer)


    return (
        <div className="page">
            <div className="header__list">
                <div className="list__title">
                    {currentDir.name}
                </div>
                <button className="back" onClick={() => props.history.goBack()}>
                    <img src={back} alt="" />
                </button>
            </div>

            <div className="listitem">
                {currentDir
                    ?
                    currentDir.childs.map(item =>
                        <DeepItem key={item.name} item={item} />
                    )
                    :
                    <div className="none">none</div>
                }
            </div>

        </div>
    )
}