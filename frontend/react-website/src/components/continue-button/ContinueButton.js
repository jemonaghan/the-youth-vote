import  Button  from 'react-bootstrap/Button';


function ContinueButton({onClick, buttonLabel}) {

  return (
    <>
      <Button variant="outline-light" onClick={onClick}>
        {buttonLabel}
      </Button>{' '}
    </>
  );

}

export default ContinueButton