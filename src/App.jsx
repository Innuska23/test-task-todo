import { ThemeProvider } from "@emotion/react";
import { Header } from "./components/header";

import "./App.css";
import { Theme } from "./constants/theme";
import { Form } from "./components/ToDo/ToDoForm";
import { ToDolist } from "./components/ToDo/ToDoList/ToDoList";
import { Pagination } from "./components/Pagination/Pagination";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }} */}
      {/* > */}
      <Header />
      <Form />
      <ToDolist />
      <Pagination />
    </ThemeProvider>
  );
}

export default App;
