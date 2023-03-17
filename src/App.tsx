import Layout from "@layouts/Layout";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
