import Navbar from "./Navbar";
import './header.sass'

const Header = () => {

    const logo = () => {
        return (
            <h1 className='navbar-wrapper--logo'>MoGo</h1>
        )
    }

    const front = () => {
        return(
            <div className='front'>
                <div className='front--text front--text__description'><strong>Creative Template</strong></div>
                <div className='front--text front--text__title'><strong><pre className='front--text front--text__title'>WELCOME</pre> TO MOGO</strong></div>
            </div>
        )
    }

    const button = () => {
        return(
            <button>LEARN MORE</button>
        )
    }

    return (
        <div className="header">
            <div className='container'>
                <div className='navbar-wrapper'>
                    {logo()}
                    <Navbar />
                </div>
            </div>
            {front()}
            {button()}
            <div className='header__bg header__bg--gradient'></div>
            <img className='header__bg header__bg--image' src='/images/eagle.png' alt=''/>
        </div>
    )
}

export default Header;