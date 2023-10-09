import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// eslint-disable-next-line react/prop-types
const SocialButton = ({icon}) => { 
  return (
    <>
      <FontAwesomeIcon className="logo" icon={icon} />
    </>
  )
}

export default SocialButton;