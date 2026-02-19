import { useEffect, useMemo, type FC } from "react";
import { LoginModal } from "../../components/LoginModal";
import type { FormFields } from "../../components/LoginModal/type";
import { useLoginMutation } from "../../store/services/api/login";
import { useNavigate } from "react-router";
import useSessionFuncs from "./hooks/useSessionFuncs";

const Login: FC = () => {
  const navigate = useNavigate();
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const { saveSession, sessionTokens } = useSessionFuncs(isLoading);

  useEffect(() => {
    if (sessionTokens?.accessToken) navigate("/orders");
  }, [sessionTokens?.accessToken, isLoading, navigate]);

  const errorMessage = useMemo(() => {
    if (error && "error" in error) {
      return error.error;
    }

    if (error && "message" in error && error.message) {
      return error.message;
    }

    if (error && "status" in error && error.status === 400) {
      return "Неверный логин или пароль! Попробуйте еще раз!";
    }

    return "Неизвестная ошибка! Попробуйте еще раз!";
  }, [error]);

  const handleSubmit = async (fields: FormFields) => {
    const response = await login({
      username: fields.username,
      password: fields.password,
    });

    if (!response.data?.accessToken) return;

    saveSession(
      response.data?.accessToken,
      response.data?.refreshToken,
      Boolean(fields.remember)
    );
  };

  return (
    <LoginModal
      onSubmit={handleSubmit}
      loading={isLoading}
      errorMessage={isError ? errorMessage : ""}
    />
  );
};

export default Login;
