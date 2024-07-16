import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";
import {styles} from "./badgeTitle.style";


export default function BadgeTitle ({children}: {children: string}) {
  const StyledTitle = styled(Typography)(() => (styles.container))
  return <StyledTitle>{children}</StyledTitle>
}
