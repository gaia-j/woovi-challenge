import {styled} from "@mui/material/styles";
import {Box, Radio, Typography} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import {InstalmentBoxProps, StyledProps} from "../../types/types";
import formatToBRL from "../../utils/formatToBrl";
import React from "react";
import {styles} from "./intallmentBox.style";
import {colors} from "../../theme";

export default function InstalmentBox(
  {
    instposition, active,
    selected, onClick,
    index, instalment,
    single,
  }: InstalmentBoxProps
) {

  // @ts-ignore
  const Styled = styled(Box)<StyledProps>(({ theme, instposition, active }) =>{
    let borderRadius = instposition === 'top' ? styles.radius.top : instposition === 'bottom' ? styles.radius.bottom : styles.radius.none
    if (single) borderRadius = styles.radius.single
    const marginTop = instposition === 'top' ? 1 : -2;
    const borderColor = active === 1 ? colors.mainGreen : colors.lightGray;
    const backgroundColor = active === 1 ? colors.highlightGreen : colors.white;
    const zIndex = active === 1 ? 5 : 1;

    return {
      ...styles.installmentBox,
      marginTop,
      borderColor,
      backgroundColor,
      borderRadius,
      zIndex,

    }
  });

  const total = formatToBRL(instalment.value / 100)
  const installmentValue = formatToBRL(instalment.value / 100 / instalment.instalment)

  const SubTitle = () => {
    if (single) {
      return (
          <Typography style={styles.cashback}>
            Ganhe <b>3%</b> de Cashback
          </Typography>
      )
    }
    return (
      <Typography style={styles.totalValue}>
        Total: {total}
      </Typography>
    )
  }

  const Strip = () => {
    if (instalment.highlightText.length >0) {
      return (
        <div style={styles.strip}>
          <Typography style={styles.font700}>{instalment.highlightText}</Typography>
          <div style={styles.stripCut}/>
        </div>
      )
    }
    return null
  }

  return (
    <Styled
      // @ts-ignore
      instposition={instposition as StyledProps['instposition']}
      active={active}
      onClick={() => onClick(index)}
    >
      <div style={styles.content}>
        <div style={styles.textLeft}>
          <Typography style={styles.installmentText}>
            <span style={styles.installmentNumber}>{instalment.instalment}x </span>
            {installmentValue}
          </Typography>
          <SubTitle/>
        </div>
        <Radio
          checked={selected === index} sx={{color: colors.lightGray}}
          checkedIcon={
            <CheckCircleRoundedIcon sx={{color: colors.mainGreen}}/>
          }
        />
      </div>
      <Strip/>
    </Styled>
  )
}
