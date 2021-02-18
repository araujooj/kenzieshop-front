import api from "../../../services/api";
import { signIn } from "./actions";

export const signInThunk = (userData, setError, history) => (dispatch) => {
  api
    .post("/sessions/", userData)
    .then((response) => {
      localStorage.setItem("token", response.data.access);

      dispatch(signIn(response.data.access));
      history.push("/finish");
    })
    .catch((e) => {
      return setError(true);
    });
};
