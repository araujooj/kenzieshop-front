import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { signInThunk } from "../../store/modules/user/thunks";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { Container } from "./styles";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  console.log(user);

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    setError(false);
    setLoading(true);
    dispatch(signInThunk(data, setError, setLoading, history, toast.error));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <TextField
            margin="normal"
            variant="outlined"
            label="Nome de usuário"
            name="username"
            size="small"
            color="primary"
            inputRef={register}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        </div>

        <div>
          <TextField
            margin="normal"
            variant="outlined"
            label="Senha"
            name="password"
            size="small"
            color="primary"
            inputRef={register}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </div>
        <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Enviar
          </Button>
        </div>
        {loading && <span> Carregando ....</span>}
        {error && <span color="red"> Usuario ou senha estão errados</span>}
      </form>
    </Container>
  );
};

export default Login;
