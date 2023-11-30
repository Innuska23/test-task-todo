import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";

import "./App.css";

import { Theme } from "./constants/theme";
import { store } from "./redux/store";
import { ToDO } from "./components/ToDo/Todo";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <ToDO />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
