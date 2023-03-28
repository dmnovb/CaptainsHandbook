

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#03a9f4",
      },
      secondary: {
        main: "#03a9f4",
      },
      background: {
        default: "#20c34",
      },
    },
    typography: {
      h6: {
        fontSize: "1rem",
        fontWeight: 100,
      },
      h5: {
        fontSize: "1.9rem",
        fontFamily: "roboto",
      },
      h4: {
        fontSize: "2rem",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
