import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
};
