import { useAuth } from "../../hooks/useAuth";

//scss
import "../../styles/header.scss";

//images
import cart from "../../assets/images/cart.svg";

export const Header = () => {
  const { user } = useAuth();

  return (
    <>
      <header>
        <div className="content">
          <img src={cart} alt="carrinho" />
          <div className="avatar">
            <img src={user?.avatar} alt={user?.name} />
          </div>
        </div>
      </header>
    </>
  );
};
