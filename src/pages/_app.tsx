import type { AppProps } from "next/app";
import {ThemeProvider, createTheme} from "@mui/material/styles/";


export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
      background: {
        default: "#1f1e1e"
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
        fontWeight: 600,
        color: '#ffffff'
      },
      h4: {
        fontSize: "2rem",
        color: '#ffffff'
      },
      h3: {
      color: '#ffffff'
      },
      h2: {
        color: '#fffff',
        fontWeight: 900
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
