import  Button  from 'react-bootstrap/Button';

function ResultsButton({onClick, buttonLabel}) {
  
    return (
        <>
            <Button variant="dark" onClick={onClick}>
                {buttonLabel}
            </Button>{' '}
        </>
  );
}

export default ResultsButton
