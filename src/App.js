import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/Global';

const theme = {
  colors: {
    mainBg: "rgb(197, 228, 231)",
    cardBg: "rgb(255, 255, 255)",

    userInputBg: "rgb(244, 250, 250)",
    userInputLabelText: "rgb(94, 122, 125)",

    calcAmountBg: "rgb(0, 73, 77)",
    calcInputText: "rgb(38, 192, 171)",
    calcAmountLabel: "rgb(127, 156, 159)",

    btnHover: "rgb(157, 232, 224)",
    inactiveBtn: "rgb(6, 104, 109)",
    
  }
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
      </>
    </ThemeProvider>
  );
}

export default App;
