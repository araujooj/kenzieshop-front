import api from "../../../services/api";
import { signIn } from "./actions";

export const signInThunk = (userData, setError, setLoading, history, toast) => (
  dispatch
) => {
  api
    .post("/sessions/", userData)
    .then((response) => {
      localStorage.setItem("token", response.data.access);

      dispatch(signIn(response.data.access));
      history.push("/finish");
      setLoading(false);
    })
    .catch((e) => {
      toast("Erro nas credenciais!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
      return setError(true);
    });
};
