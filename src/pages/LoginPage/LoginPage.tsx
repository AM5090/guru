import { Login } from "../../modules/Login";

const LoginPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Login />
    </div>
  );
};

export default LoginPage;
