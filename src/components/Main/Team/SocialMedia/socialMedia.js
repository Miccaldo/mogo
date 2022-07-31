import './socialMedia.sass'
import PropTypes from "prop-types";

const SocialMedia = ({ className, items }) => {
    return(
        <ul className={`social-media ${className}`} >
            {
                items && items.map((item, index) => {
                    const { icon, url } = item;
                    return(
                        <li key={index}>
                            <a className='social-media__link' href={url}>
                                <img className='social-media__link--icon' src={icon} alt='icon'/>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

SocialMedia.propTypes = {
    items: PropTypes.array.isRequired
}
export default SocialMedia;