import { Link } from "react-router-dom";

//images
import cartShopping from "../../assets/images/cart-shopping.gif";

//scss
import "../../styles/auth.scss";

export const Register = () => {
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
            <form>
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="E-mail" />
              <input type="password" placeholder="Senha" />
              <button type="submit">Criar conta</button>
            </form>
            <p>
              Já é um membro? <Link to="/">Clique Aqui</Link>
            </p>
          </div>
        </main>
      </div>
    </>
  );
};
