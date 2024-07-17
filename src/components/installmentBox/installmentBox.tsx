import {styled} from "@mui/material/styles";
import {Box, Radio, Typography} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import {InstalmentBoxProps, StyledProps} from "../../interfaces/interfaces";
import formatToBRL from "../../utils/formatToBrl";
import React from "react";
import {styles} from "./intallmentBox.style";
import {colors} from "../../theme";

export default function InstalmentBox(
  {
    instposition,single,
    selected, onClick,
    instalment,
  }: InstalmentBoxProps
) {

  // @ts-ignore
  const Styled = styled(Box)<StyledProps>(({ theme, instposition }) =>{
    const active = selected?.instalment === instalment.instalment
    let borderRadius = instposition === 'top' ? styles.radius.top : instposition === 'bottom' ? styles.radius.bottom : styles.radius.none
    if (single) borderRadius = styles.radius.single
    const marginTop = instposition === 'top' ? 1 : -2;
    const borderColor = active ? colors.mainGreen : colors.lightGray;
    const backgroundColor = active ? colors.highlightGreen : colors.white;
    const zIndex = active ? 5 : 1;

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
    if (instalment.instalment === 4) {
      return (
        <div style={styles.strip}>
          <Typography style={styles.stripText}>
            <span style={styles.highlight}>-3% de juros: </span>
            Melhor opção de parcelamento
          </Typography>
          <div style={styles.stripCut}/>
        </div>
      )
    }
    if(instalment.instalment === 1) {
      return (
        <div style={styles.strip}>
          <Typography style={styles.stripText}>
            <span style={styles.highlight}>🤑 R$ 300,00 </span>
            de volta no seu Pix na hora
          </Typography>
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
      onClick={() => onClick(instalment)}
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
          checked={selected?.instalment === instalment.instalment} sx={{color: colors.lightGray}}
          checkedIcon={
            <CheckCircleRoundedIcon sx={{color: colors.mainGreen}}/>
          }
        />
      </div>
      <Strip/>
    </Styled>
  )
}
