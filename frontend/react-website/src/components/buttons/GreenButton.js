import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(lightGreen[500]),
    backgroundColor: lightGreen[500],
    boxShadow: '0.2rem 0.2rem rgba(255,255,255,0.9)',
    fontFamily: ['Rubik'].join(','),
    '&:hover': {
    backgroundColor: lightGreen[700],
    boxShadow: '0.2rem 0.2rem 0.2rem 0.1rem rgba(225,225,225,1)',
    },
     
}));

function GreenButton({onClick, buttonLabel}) {

    return (
        <>
            <ColorButton variant="contained" onClick={onClick}>
                {buttonLabel}
            </ColorButton>{' '}
        </>
    );

}

export default GreenButton