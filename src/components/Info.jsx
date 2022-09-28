import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Info() {
  return (
    <div className='info--wrapper'>
      <div className='info--dp' />
      <h2 className='info--name'>David Pam</h2>
      <p className='info--job'>Fullstack Developer</p>
      <a className='info--website' href='#'>
        niratpam.io
      </a>
      <div className='info--button-wrapper'>
        <button className='info--button info--button-envelope'>
          <FontAwesomeIcon className='info--envelope-icon' icon={faEnvelope} />
          Email
        </button>
        <button className='info--button info--button-linkedin'>
          <FontAwesomeIcon className='info--linkedin-icon' icon={faLinkedin} />
          Linkedin
        </button>
      </div>
    </div>
  );
}

export default Info;
