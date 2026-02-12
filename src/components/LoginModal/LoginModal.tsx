import { Button, Card, Checkbox, Divider, Form, Input } from "antd";
import type { FC } from "react";
import styles from "./loginModal.module.scss";
import "./loginModal.ant.scss";
import logo from "../../assets/logo.svg";
import type { FormFields } from "./type";
import { Close, EyeOff, EyeOn, Lock, UserIcon } from "../shared/icons";

const LoginModal: FC = () => {
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
      <Card className={styles.loginModal}>
        <div className={styles.logo}>
          <div>
            <img src={logo} alt="logo" />
          </div>
        </div>

        <p className={styles.title}>Добро пожаловать!</p>
        <p className={styles.subtitle}>Пожалуйста, авторизуйтесь</p>

        <Form
          className={styles.loginForm}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item<FormFields>
            label="Логин"
            name="username"
            rules={[{ required: true, message: "Укажите ваш логин!" }]}
          >
            <Input
              prefix={<UserIcon />}
              suffix={
                <Button className={styles.closeButton} type="text">
                  <Close />
                </Button>
              }
              autoComplete="email"
              className={styles.loginModalInput}
            />
          </Form.Item>
          <Form.Item<FormFields>
            label="Пароль"
            name="password"
            rules={[{ required: true, message: "Укажите ваш пароль!" }]}
          >
            <Input.Password
              prefix={<Lock />}
              iconRender={(visible) => {
                return visible ? (
                  <Button
                    style={{ padding: "0 4px", margin: "0px" }}
                    type="text"
                  >
                    <EyeOn />
                  </Button>
                ) : (
                  <Button
                    style={{ padding: "0 4px", margin: "0px" }}
                    type="text"
                  >
                    <EyeOff />
                  </Button>
                );
              }}
              className={styles.loginModalInput}
            />
          </Form.Item>
          <Form.Item<FormFields> className={styles.rememberButton}>
            <Checkbox>Запомнить данные</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button className={styles.loginModalSubmit} type="primary">
              Войти
            </Button>
          </Form.Item>
        </Form>
        <Divider className={styles.divider} plain>
          <span className={styles.subtitle}>или</span>
        </Divider>

        <p className={styles.createAccount}>
          Нет аккаунта? <button className={styles.createButton}>Создать</button>
        </p>
      </Card>
    </div>
  );
};

export default LoginModal;
