//Hooks
import { useAuth } from "../../hooks/useAuth";

export const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <h1>{user?.name}</h1>
    </>
  );
};
