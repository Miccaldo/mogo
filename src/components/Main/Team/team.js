import Section from "../../ui/Section";
import Card from "./Card";
import './team.sass'

const Team = () => {

    const team = [
        {
            name: 'Matthew Dix',
            role: 'Graphic Design',
            image: '/images/team_1.png',
            social_media: [
                {
                    icon: 'icons/facebook.svg',
                    url: ''
                },
                {
                    icon: 'icons/twitter.svg',
                    url: ''
                },
                {
                    icon: 'icons/pinterest.svg',
                    url: ''
                },
                {
                    icon: 'icons/instagram.svg',
                    url: ''
                },
            ]
        },
        {
            name: 'Christopher Campbell',
            role: 'Branding/UX design',
            image: '/images/team_2.png',
            social_media: [
                {
                    icon: 'icons/facebook.svg',
                    url: ''
                },
                {
                    icon: 'icons/twitter.svg',
                    url: ''
                },
                {
                    icon: 'icons/pinterest.svg',
                    url: ''
                },
                {
                    icon: 'icons/instagram.svg',
                    url: ''
                },
            ]
        },
        {
            name: 'Michael Fertig ',
            role: 'Developer',
            image: '/images/team_3.png',
            social_media: [
                {
                    icon: 'icons/facebook.svg',
                    url: ''
                },
                {
                    icon: 'icons/twitter.svg',
                    url: ''
                },
                {
                    icon: 'icons/pinterest.svg',
                    url: ''
                },
                {
                    icon: 'icons/instagram.svg',
                    url: ''
                },
            ]
        }
    ]

    return (
        <Section title='Meet our team' subtitle='Who we are'>
            <div className='team--description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className='team__wrapper'>
                {team && team.map((item, index) => {
                    const { name, role, image, social_media: socialMedia } = item;
                    return (
                        <Card key={index} name={name} role={role} image={image} socialMedia={socialMedia}/>
                    )
                })}
            </div>
        </Section>
    )
}
export default Team;