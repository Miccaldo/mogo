import './card.sass'
import PropTypes from "prop-types";
import SocialMedia from "../SocialMedia";

const Card = ({name, role, image, socialMedia}) => {

    return (
        <div className='card'>
            <div className='image-wrapper'>
                <img className='image-wrapper__element--image image-wrapper__element' src={image} alt='*'></img>
                <SocialMedia className='social-media-wrapper--links'
                             items={socialMedia}/>
                <div className='image-wrapper__element--mask image-wrapper__element'>
                </div>
                <div className='image-wrapper__element--bg image-wrapper__element'/>
                <div className='image-wrapper__element--block'/>
            </div>
            <div className='card--name'>
                {name}
            </div>
            <div className='card--role'>
                {role}
            </div>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    socialMedia: PropTypes.array.isRequired
}

export default Card;