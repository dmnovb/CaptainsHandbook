import type { AppProps } from "next/app";
import { red } from '@mui/material/colors';
import {ThemeProvider, createTheme} from "@mui/material/styles/";


export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
      secondary: {
        main: red[100]
      },
      background: {
        default: "#000000"
      }
    },
    typography: {
      h6: {
        fontSize: "1rem",
        fontWeight: 100,
        color: '#ffffff'
      },
      h5: {
        fontSize: "1.9rem",
        fontFamily: "roboto",
        color: '#ffffff'
      },
      h4: {
        fontSize: "2rem",
        color: '#ffffff'
      },
      h3: {
      color: '#ffffff'
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
