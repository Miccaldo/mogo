import './footer.sass'
import SubscribeForm from "./SubscribeForm";

const Footer = () => {

    const time = new Date();

    return (
        <div className='footer container'>
            <div className='footer__footer-wrapper'>
                <div className='footer__footer-wrapper--copyright'>
                    <span>{`© ${time.getFullYear()} MoGo created by `}</span>
                    <span className='footer__footer-wrapper--developer'>Miccaldo</span>
                </div>
                <SubscribeForm />
            </div>
        </div>
    )
}

export default Footer;