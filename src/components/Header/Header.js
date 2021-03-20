
import './Header.scss'
import logo from '../../assets/desktop/logo.svg';

import ThemeToggler from '../ThemeToggler/ThemeToggler'

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <a href="/" className="header__container--logo">
                    <img src={logo} alt="Logo"/>
                </a>
                <div>
                    <ThemeToggler/>
                </div>
            </div>
        </header>
    )
}
export default Header;