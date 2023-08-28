import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./components/styles/Theme.styled";
import GlobalStyles from "./components/styles/Global";
import Info from "./components/Info.jsx";
import Plan from "./components/Plan.jsx";
import AddOns from "./components/AddOns.jsx";
import Summary from "./components/Summary.jsx";
import ThankYou from "./components/ThankYou.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/add-ons" element={<AddOns />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
