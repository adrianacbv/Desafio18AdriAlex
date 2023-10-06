//import Formulario from './Formulario.jsx';
import SocialButton from './SocialButton.jsx';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Registro = () => { return (
  <>
    <SocialButton icon={faFacebook} />
    <SocialButton icon={faGithub} />
    <SocialButton icon={faLinkedin} />
  </>
  )
}

export default Registro;