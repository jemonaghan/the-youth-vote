import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { orange, lime} from '@mui/material/colors';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[600],
    boxShadow: '0.2rem 0.2rem rgba(255,255,255,0.9)',
    fontFamily: ['Rubik'].join(','),
    '&:hover': {
    backgroundColor: lime[500],
    boxShadow: '0.1rem 0.1rem 0.2rem 0.2rem rgba(225,225,225,1)',
    },
     
}));

function OrangeButton({onClick, buttonLabel}) {

    return (
        <>
            <ColorButton variant="contained" size="large" onClick={onClick}>
                {buttonLabel}
            </ColorButton>{' '}
        </>
    );

}

export default OrangeButton