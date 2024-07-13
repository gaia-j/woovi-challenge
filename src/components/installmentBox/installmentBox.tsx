import {styled} from "@mui/material/styles";
import {Box, Radio, Typography} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import {InstalmentBoxProps, StyledProps} from "../../types/types";
import formatToBRL from "../../utils/formatToBrl";

export default function InstalmentBox({instposition, active, selected, onClick, index, instalment, single}: InstalmentBoxProps) {

  const Styled = styled(Box)<StyledProps>(({ theme, instposition, active }) =>{
    let borderRadius = instposition === 'top' ? '10px 10px 0 0' : instposition === 'bottom' ? '0 0 10px 10px' : '0px';
    if (single) borderRadius = '10px'
    const marginTop = instposition === 'top' ? 1 : -2;
    const borderColor = active === 1 ? '#03D69D' : '#E5E5E5';
    const backgroundColor = active === 1 ? '#F4FBF9' : '#FFF';
    const zIndex = active === 1 ? 5 : 1;
    return {
      cursor: 'pointer',
      position: 'relative',
      border: '2px solid',
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing(2),
      marginTop,
      borderColor,
      backgroundColor,
      borderRadius,
      zIndex,
      '&:hover': {
        backgroundColor: '#F4FBF9',
      },
    }
  });

  const total = formatToBRL(instalment.value / 100)
  const installmentValue = formatToBRL(instalment.value / 100 / instalment.instalment)

  return (
    <Styled
      instposition={instposition as StyledProps['instposition']}
      active={active}
      onClick={()=> onClick(index)}
    >
      <div style={{textAlign: 'left'}}>
        <Typography style={{color: "#4D4D4D", fontWeight: '700'}} variant="body1">
          <span style={{fontWeight: '800', fontSize: '1.1rem'}}>{instalment.instalment}x </span>
          {installmentValue}
        </Typography>
        <Typography style={{color: "#AFAFAF", fontWeight: '500', fontSize: '0.9rem'}} variant="body1">
          Total: {total}
        </Typography>
      </div>

      <Radio
        checked={selected===index} sx={{color: '#E5E5E5'}}
        checkedIcon={
          <CheckCircleRoundedIcon sx={{color: '#03D69D'}}/>
        }
      />
    </Styled>
  )
}
