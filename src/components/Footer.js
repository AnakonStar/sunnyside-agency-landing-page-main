import '../App.scss';

import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as IconFacebook } from '../images/icon-facebook.svg';
import { ReactComponent as IconInstagram } from '../images/icon-instagram.svg';
import { ReactComponent as IconPinterest } from '../images/icon-pinterest.svg';
import { ReactComponent as IconTwitter } from '../images/icon-twitter.svg';

export default function Footer() {
    return (
        <footer>
            <Logo />
            <ul className='nav-footer'>
                <li>
                    <a href='#'>
                        About
                    </a>
                </li>
                <li>
                    <a href='#'>
                        Services
                    </a>
                </li>
                <li>
                    <a href='#'>
                        Projects
                    </a>
                </li>
            </ul>
            <ul className='icons-footer'>
                <li>
                    <IconFacebook />
                </li>
                <li>
                    <IconInstagram />
                </li>
                <li>
                    <IconTwitter />
                </li>
                <li>
                    <IconPinterest />
                </li>
            </ul>
            <div class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://www.frontendmentor.io/profile/AnakonStar" target='_blank'>Enzo Santana/AnakonStar</a>.
            </div>
        </footer>
    );
}