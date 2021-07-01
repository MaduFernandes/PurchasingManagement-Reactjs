//React
import { useHistory, Link } from "react-router-dom";

//Hooks
import { useAuth } from "../../hooks/useAuth";

//images
import cartShopping from "../../assets/images/cart-shopping.gif";
import googleIcon from "../../assets/images/google-icon.svg";

//scss
import "../../styles/auth.scss";

export const Login = () => {
  const history = useHistory();
  const { user, loginWithGoogle } = useAuth();

  const handleNewPage = async () => {
    !user ? await loginWithGoogle : history.push("/home");
  };

  return (
    <>
      <div id="page-auth">
        <aside>
          <img src={cartShopping} alt="Supermercado" />
          <strong>Gerencie suas compras</strong>
          <p>E veja se está pagando mais barato.</p>
        </aside>
        <main>
          <div className="content-main">
            <button className="button-google" onClick={handleNewPage}>
              <img src={googleIcon} alt="Logo do Google" />
              Fazer login com o Google
            </button>
            <div className="separator">
              <p>
                ou crie uma <Link to="/register"> conta </Link>
              </p>
            </div>
            <form>
              <input type="text" placeholder="E-mail" />
              <input type="password" placeholder="Senha" />
              <button type="submit">Login</button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};
