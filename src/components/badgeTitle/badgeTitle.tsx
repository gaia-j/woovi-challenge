import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";


export default function BadgeTitle ({children}: {children: string}) {
  const StyledTitle = styled(Typography)(() => ({
    position: 'absolute',
    top: '-10px',
    left: '20px',
    color: '#4D4D4D',
    fontWeight: '800',
    backgroundColor: '#E5E5E5',
    padding: `0 1rem`,
    fontSize: '1rem',
    borderRadius: '100px',
    zIndex: 10
  }))
  return <StyledTitle>{children}</StyledTitle>
}
