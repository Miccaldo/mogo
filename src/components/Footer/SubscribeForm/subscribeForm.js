import Button from "../../ui/Button";
import Input from "../../ui/Input";
import './subscribeForm.sass'
import {useState} from "react";

const SubscribeForm = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email.length > 0 && alert(`Subscribed! ${email}`)
    }

    return(
        <form className='subscribe-form' onSubmit={handleSubmit}>
            <Input className='subscribe-form--input' type='email' minLength='1' placeholder='Your Email...' name='email' onChange={(e) => setEmail(e.target.value)}/>
            <Button className='subscribe-form--button' appearance='secondary' type='submit'>
                <span className='subscribe-form--button__name'>SUBSCRIBE</span>
                <img className='subscribe-form--button__icon' src='icons/subscribe.svg' alt='*'/>
            </Button>
        </form>
    )
}
export default SubscribeForm;