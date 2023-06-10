import '../App.scss';

import ServicesContent from './ServicesContent';

import imagePhotography from '../images/desktop/image-photography.jpg';
import imageGraphicDesign from '../images/desktop/image-graphic-design.jpg';

export default function Services() {
    return (
        <div className='services'>
            <ServicesContent style='text text-graphic' img={imageGraphicDesign} title='Graphic design' text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."/>
            <ServicesContent style='text text-photography' img={imagePhotography} title='Photography' text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."/>
        </div>
    );
}