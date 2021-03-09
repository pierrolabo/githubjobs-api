
import './Header.scss'
import logo from '../../assets/desktop/logo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <a href="#home" className="header__container--logo">
                    <img src={logo} alt="Logo"/>
                </a>
                <div>
                    <p>Switch</p>
                </div>
            </div>
        </header>
    )
}
export default Header;