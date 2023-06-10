import '../App.scss';

import imageCone from '../images/desktop/image-gallery-cone.jpg';
import imageMilk from '../images/desktop/image-gallery-milkbottles.jpg';
import imageOrange from '../images/desktop/image-gallery-orange.jpg';
import imageSugar from '../images/desktop/image-gallery-sugarcubes.jpg';

export default function Gallery() {
    return (
        <section className='gallery'>
            <div>
                <img src={imageMilk} alt='milk' />
                <img src={imageOrange} alt='orange' />
                <img src={imageCone} alt='cone' />
                <img src={imageSugar} alt='sugar' />
            </div>
        </section>
    );
}