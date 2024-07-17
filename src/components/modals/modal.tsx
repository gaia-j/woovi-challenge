import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {styles} from "./modal.style";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../contexts/AppContext";
import {AppContextType} from "../../interfaces/interfaces";



export default function ModalPayment({open, handleClose, pix}: {open: boolean, handleClose: () => void, pix?: boolean}) {
  const {selectedOption} = useAppContext() as AppContextType
  const term = selectedOption?.instalment as number
  const navigate = useNavigate();

  const handleNext = () => {
    setTimeout(() => {
      pix ? term > 1? navigate('/payment-card'): navigate('/final') : navigate('/final')
    }, 500);
  }

  const label = pix ? term > 1? 'Próximo' : 'Finalizar' : 'Finalizar'

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.container}>
        <CheckCircleIcon style={styles.icon}/>
        <Typography style={styles.text}>
          Pagamento confirmado!
        </Typography>
        <Button
          style={styles.button}
          variant='outlined'
          onClick={handleNext}>
          {label}
        </Button>
      </Box>
    </Modal>
  );
}
