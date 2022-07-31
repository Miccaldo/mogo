import './input.sass'

const Input = ({className, children,...restProps}) => {
    return(
        <input className={`input ${className ? className : ''}`}  {...restProps}>{children}</input>
    )
}
export default Input;