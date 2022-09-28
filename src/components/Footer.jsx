import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagramSquare,
  faTwitterSquare,
  faFacebookSquare,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer--wrapper'>
      <FontAwesomeIcon className='footer--social-icon' icon={faTwitterSquare} />
      <FontAwesomeIcon className='footer--social-icon' icon={faFacebookSquare} />
      <FontAwesomeIcon className='footer--social-icon' icon={faInstagramSquare} />
      <FontAwesomeIcon className='footer--social-icon' icon={faGithubSquare} />
    </div>
  );
}

export default Footer;
