import api from "../../../services/api";
import { signIn } from "./actions";

export const signInThunk = (userData) => async (dispatch) => {
  const response = await api
    .post("/sessions/", userData)
    .catch((e) => console.log(e));

  localStorage.setItem("token", response.data.access);

  dispatch(signIn(response.data.access));
};
