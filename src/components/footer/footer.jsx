import './footer.scss'
import bel from '../../static/bel.png'
import tech from '../../static/tech.png'
import { useSelector } from 'react-redux'


export const Footer = () => {
    const { language } = useSelector(({ ItemReducer }) => ItemReducer)

    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="content">
                    {
                        language === 'rus' ?
                            'Национальный оператор почтовой связи Республики Беларусь' :
                            'National postal operator of the Republic of Belarus'
                    }
                </div>
                <div className="footer__logo">
                    <img src={bel} alt="" />
                </div>
                <div className="content">
                    {
                        language === 'rus' ?
                            'Покупайте белорусские товары на shop.belpost.by' :
                            'Buy Belarusian goods at shop.belpost.by'
                    }
                </div>
            </div>
            <div className="footer__bottom">
                <div className="side__bottom">
                    {
                        language === 'rus' ?
                            'Разработано компанией' :
                            'Developed by'
                    }
                </div>
                <div className="side__center">
                    <img src={tech} alt="" />
                </div>
                <div className="side__bottom">
                    {
                        language === 'rus' ?
                            'High-tech.by' :
                            'ibubizm'}
                </div>
            </div>
        </footer>
    )
}