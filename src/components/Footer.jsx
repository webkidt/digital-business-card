import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagramSquare,
  faTwitterSquare,
  faFacebookSquare,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div>
      <FontAwesomeIcon icon={faTwitterSquare} />
      <FontAwesomeIcon icon={faFacebookSquare} />
      <FontAwesomeIcon icon={faInstagramSquare} />
      <FontAwesomeIcon icon={faGithubSquare} />
    </div>
  );
}

export default Footer;
