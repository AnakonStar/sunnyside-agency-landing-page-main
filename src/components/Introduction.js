import '../App.scss';
import Header from './Header';

import headerImage from '../images/desktop/image-header.jpg';
import headerImageMob from '../images/mobile/image-header.jpg';
import { ReactComponent as ArrowDown } from '../images/icon-arrow-down.svg';

export default function Introduction() {
    return (
        <section className='introduction'>
            <Header />
            <div>
                <span>We are creatives</span>
                <ArrowDown />
                <picture>
                    <source media="(max-width:375px)" srcset={headerImageMob} />
                    <img src={headerImage} alt="logo" />
                </picture>
            </div>
        </section>
    );
}
