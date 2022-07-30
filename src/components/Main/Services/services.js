import Section from "../../ui/Section";
import './services.sass'

const Services = () => {

    const services = [
        {
            icon: '/icons/alarm.svg',
            title: 'Photography',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
        },
        {
            icon: '/icons/graph.svg',
            title: 'Web design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
        },
        {
            icon: '/icons/computer.svg',
            title: 'Creativity',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
        },
        {
            icon: '/icons/book.svg',
            title: 'SEO',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
        },
        {
            icon: '/icons/home.svg',
            title: 'CSS/HTML',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
        },
        {
            icon: '/icons/image.svg',
            title: 'Digital',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
        }
    ]

    return(
        <Section title='AMAZING SERVICES' subtitle='We work with'>
            <div className='services'>
                {services.map(service => {
                    const { icon, title, description } = service;
                    return (
                        <div className='services__service'>
                            <div className='service-wrapper'>
                                <div className='service-wrapper--image'>
                                    <img src={icon} alt='*' />
                                </div>
                                <div>
                                    <div className='service-wrapper--title'>{title}</div>
                                    <div className='service-wrapper--description'>{description}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}
export default Services;