import { useSelector } from "react-redux";
import { Redirect, Route as ReactRoute } from "react-router-dom";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useSelector((state) => state.user);

  // Se a rota for privada e o usuário não esta logado, ele vai pro login
  // Se ela esta privada e o usuario logado, vamos levar ele pro dashboard
  // Se a rota for privada e o usuario logado, ele vai conseguir acessar,
  // Se a rota não for privada e o usuario não estiver logado, ele vai conseguir acessar

  // True/true = ok
  // true/false = redirecionar para o login
  // false/true = redirecionar para o dashboard
  // false/false = ok

  return (
    <ReactRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
            }}
          />
        );
      }}
    />
  );
};

export default Route;
