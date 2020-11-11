import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ViewportProvider from "./context/ViewportProvider";

const Root = () => (
  <ViewportProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ViewportProvider>
);

export default Root;
