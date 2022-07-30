import './section.sass'

const Section = ({title, subtitle, children}) => {
    return(
        <div className='section container'>
            <div className='section--subtitle'>{subtitle}</div>
            <h2 className='section--title'>{title}</h2>
            {children}
        </div>
    )
}
export default Section;