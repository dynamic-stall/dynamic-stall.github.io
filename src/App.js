import React, { useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  useEffect(() => {
    // CSS custom properties for chosen theme
    document.documentElement.style.setProperty('--theme-text', chosenTheme.text);
    document.documentElement.style.setProperty('--theme-body', chosenTheme.body);
    document.documentElement.style.setProperty('--theme-highlight', chosenTheme.highlight);
    document.documentElement.style.setProperty('--theme-dark', chosenTheme.dark);
    document.documentElement.style.setProperty('--theme-secondary-text', chosenTheme.secondaryText);
  }, []);

  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;