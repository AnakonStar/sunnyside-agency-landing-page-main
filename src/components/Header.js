import '../App.scss';
import logo from '../images/logo.svg';

function Header(props) {
    return (
        <header>
            <img src={logo}/>
            <nav>
                <ul>
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
                    <li>
                        <a href='#'>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;