import './navbar.sass'

const Navbar = () => {

    const navbarItems = [ { name: 'About', url: ''}, { name: 'Service', url: ''}, { name: 'Work', url: ''}, { name: 'Blog', url: ''}, { name: 'Contact', url: ''}];

    return(
        <ul className='navbar'>
            {
                navbarItems && navbarItems.map((item, index) => {
                    const { name, url } = item;
                    return (
                        <li key={index} className='navbar--item'>
                            <a className='navbar--item__link' href={url}>
                                {name}
                            </a>
                        </li>
                    )}
                )
            }
        </ul>
    )
}

export default Navbar;