import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import {Box, Typography} from "@mui/material";


export default function Teste () {

  const borderStyle = ''

  const StyledBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    border: '1px solid #03D69D',
  }));

  const Title = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    top: '-10px',
    left: '10px',
    backgroundColor: '#f00',
    padding: `0 ${theme.spacing(30)}px`,
    fontSize: '1rem',
  }));


  return (
    <div>
      <h1>teste</h1>
      <StyledBox>
        <Title variant="h6">Título</Title>
        <Typography variant="body1">
          Conteúdo da div
        </Typography>
      </StyledBox>
    </div>
  )
}