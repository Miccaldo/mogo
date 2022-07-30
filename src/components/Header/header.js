import Navbar from "./Navbar";
import Button from "../ui/Button";
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

    return (
        <div className="header">
            <div className='container'>
                <div className='navbar-wrapper'>
                    {logo()}
                    <Navbar />
                </div>
            </div>
            {front()}
            <Button className='header--button' appearance='primary'>LEARN MORE</Button>
            <div className='header__bg header__bg--gradient'></div>
            <img className='header__bg header__bg--image' src='/images/eagle.png' alt=''/>
        </div>
    )
}

export default Header;