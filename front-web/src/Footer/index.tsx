import './style.css';
import {ReactComponent as YouTubeIcon} from './youtube.svg';
import {ReactComponent as LinkedinIcon} from './linkedin.svg';
import {ReactComponent as InstagramIcon} from './instagram.svg';

function Footer() {
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a target="_new" href="">
                    <YouTubeIcon />
                </a>
                <a target="_new" href="">
                    <LinkedinIcon />
                </a>
                <a target="_new" href="">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;