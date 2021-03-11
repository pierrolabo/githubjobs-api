import './ThemeToggler.scss'
import sun from '../../assets/desktop/icon-sun.svg'
import moon from '../../assets/desktop/icon-moon.svg'
const ThemeToggler = () => {
    return (
        <div className="header__themetoggler__container">
            <div>
            <img src={sun} alt="moon" className="header__themetoggler__container--ico--sun"/>

            </div>
            <input type="checkbox" id="switch" className="header__themetoggler__container--input"/>
            <label for="switch" className="header__themetoggler__container--label">Toggle</label>
            <div className="header__themetoggler__ico">
                <div className="header__themetoggler__ico__container">
            <img src={moon} alt="moon" className="header__themetoggler__container--ico--moon"/>

                </div>

            </div>
        </div>
    )
}   

export default ThemeToggler;