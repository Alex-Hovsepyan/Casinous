import {ThemeProvider} from "styled-components";
import {GlobalStyledProvider} from "../styles";

const MyThemeProvider = ({children}) => {
  const theme = {
    laptop: '991px',
    mobile: '575px',
    desktop: '1050px',
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyledProvider />
      {children}
    </ThemeProvider>
  )
}

export default MyThemeProvider