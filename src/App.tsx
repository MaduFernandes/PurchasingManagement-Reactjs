//React
import { BrowserRouter, Route } from "react-router-dom";

//Pages
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Home } from "./pages/Home/Home";

//Context
import { AuthContextProvider } from "./context/AuthContext";

export const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
      </AuthContextProvider>
    </BrowserRouter>
  );
};
