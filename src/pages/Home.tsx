import { useHistory, Link } from "react-router-dom";

//images
import cartShopping from "../assets/images/cart-shopping.gif";
import googleIcon from "../assets/images/google-icon.svg";

//scss
import "../styles/auth.scss";

export const Home = () => {
  const history = useHistory();

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
            <button className="button-google">
              <img src={googleIcon} alt="Logo do Google" />
              Fazer login com o Google
            </button>
            <div className="separator">
              <p>
                ou crie uma <Link to="/register">conta</Link>
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
