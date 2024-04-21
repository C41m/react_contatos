import GlobalStyles from "../../assets/styles/global";
import defaultTheme from "../../assets/styles/themes/default";
import { ThemeProvider } from "styled-components";
import { Container } from "./styles";
import Header from "./Header";
import Routess from "../../Routes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Routess />
      </Container>
    </ThemeProvider>
  );
}

export default App;
