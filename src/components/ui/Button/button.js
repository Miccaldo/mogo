import './button.sass';
import {oneOf} from "prop-types";

const Button = ({className, children, ...restProps}) => {
    return (
        <button className={`button ${className}`} {...restProps}>{children}</button>
    )
}

Button.propTypes = {
    appearance: oneOf(['primary', 'secondary']).isRequired
}

export default Button;