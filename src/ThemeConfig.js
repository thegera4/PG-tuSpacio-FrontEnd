import { createTheme } from "@material-ui/core";

//Aqui se overidean los estilos de material ui
const theme = createTheme({
  palette: {
    primary: {
      main: "#257558", // #257558
      light: "#57a485",
      dark: "#00492f",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#606060",
      light: "#8d8d8d",
      dark: "#363636",
      contrastText: "#ffffff",
    },
  },
  
});

export default theme;