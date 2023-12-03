import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";

import "./App.css";

import { Theme } from "./constants/theme";
import { store } from "./redux/store";
import { ToDO } from "./components/ToDo/Todo";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Layout>
          <ToDO />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
