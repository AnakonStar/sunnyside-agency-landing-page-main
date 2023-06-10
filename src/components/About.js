import '../App.scss';

import imageTransform from '../images/desktop/image-transform.jpg';
import imageStandOut from '../images/desktop/image-stand-out.jpg';

import AboutContent from './AboutContent';

export default function About() {
    return (
        <section className='about'>
            <AboutContent img={imageTransform} title='Transform your brand' text='We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'/>
            <AboutContent img={imageStandOut} title='Stand out to the right audience' text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."/>
        </section>
    );
}