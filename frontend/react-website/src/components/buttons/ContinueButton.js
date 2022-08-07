import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    boxShadow: '0.2rem 0.2rem rgba(0,0,0,0.5)',
    fontFamily: ['Rubik'].join(','),
    '&:hover': {
    backgroundColor: purple[700],
    boxShadow: '0 0 0.5rem 0.2rem rgba(225,123,255,.5)',
    },
     
}));

function ContinueButton({onClick, buttonLabel}) {

    return (
        <>
            <ColorButton variant="contained" color="secondary" onClick={onClick}>
                {buttonLabel}
            </ColorButton>{' '}
        </>
    );

}

export default ContinueButton