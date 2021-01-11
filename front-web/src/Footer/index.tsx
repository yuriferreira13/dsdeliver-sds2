import './style.css';
import {ReactComponent as YouTubeIcon} from './youtube.svg';
import {ReactComponent as LinkedinIcon} from './linkedin.svg';
import {ReactComponent as InstagramIcon} from './instagram.svg';

function Footer() {
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a target="_new" href="https://www.youtube.com/watch?v=Wl959QnD3lM&t=45s&ab_channel=lerrific">
                    <YouTubeIcon />
                </a>
                <a target="_new" href="https://www.linkedin.com/in/yuri-ferreira-a38b26203/">
                    <LinkedinIcon />
                </a>
                <a target="_new" href="https://www.instagram.com/yferreiira/">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;