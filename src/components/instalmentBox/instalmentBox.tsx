import { styled } from "@mui/material/styles";
import {Box, Radio, Typography, Icon} from "@mui/material";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';


function formatToBRL(number: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);
}

type InstalmentBoxProps = {
  instPosition: 'top' | 'middle' | 'bottom';
  active: boolean;
  instalment: number;
  instalmentValue: number;
  onClick: () => void;
};

const StyledBox = styled(Box)<{ instPosition: 'top' | 'middle' | 'bottom'; active: boolean }>(({ theme, instPosition, active }) => ({
  cursor: 'pointer',
  position: 'relative',
  border: '2px solid',
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  marginTop: instPosition === 'top' ? 0 : -2,
  borderColor: active ? '#03D69D' : '#E5E5E5',
  backgroundColor: active ? '#F4FBF9' : '#FFF',
  borderRadius: instPosition === 'top' ? '10px 10px 0 0' : instPosition === 'bottom' ? '0 0 10px 10px' : '0px',
  zIndex: active ? 5 : 1,
  '&:hover': {
    backgroundColor: '#F4FBF9',
  },
}));

export default function InstalmentBox({ instPosition, active, instalment, instalmentValue, onClick }: InstalmentBoxProps) {
  return (
    <StyledBox
      instPosition={instPosition}
      active={active}
      onClick={onClick}
    >
      <div style={{textAlign: 'left'}}>
        <Typography style={{color: "#4D4D4D", fontWeight: '700'}} variant="body1">
          <span style={{fontWeight: '800', fontSize: '1.1rem'}}>{instalment}x </span>
          {formatToBRL(instalmentValue/100/instalment)}
        </Typography>
        <Typography style={{color: "#AFAFAF", fontWeight: '500', fontSize: '0.9rem'}} variant="body1">
          Total: {formatToBRL(instalmentValue/100)}
        </Typography>
      </div>

      <Radio checked={active} sx={{color: '#E5E5E5'}} checkedIcon={<CheckCircleRoundedIcon sx={{color: '#03D69D'}} />}/>
    </StyledBox>
  );
}
