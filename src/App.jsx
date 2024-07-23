import { BrowserRouter } from "react-router-dom";
import {AppRouter} from "./router/AppRouter.jsx";
import {ThemeProvider} from "./auth/ThemeContext.jsx"


export const App = () => {
  return (
    <ThemeProvider> 
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ThemeProvider>
  );
};
