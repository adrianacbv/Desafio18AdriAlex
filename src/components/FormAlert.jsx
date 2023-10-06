import Alert from 'react-bootstrap/Alert';

// eslint-disable-next-line react/prop-types
const FormAlert = ({alertType, alertText}) => { return (
  <>
    <Alert variant={alertType}>
      {alertText}
    </Alert>
  </>
  )
}

export default FormAlert;