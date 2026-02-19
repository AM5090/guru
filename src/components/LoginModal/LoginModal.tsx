import { Button, Card, Checkbox, Divider, Form, Input, Spin } from "antd";
import { type FC } from "react";
import styles from "./loginModal.module.scss";
import "./loginModal.ant.scss";
import logo from "../../assets/logo.svg";
import type { FormFields, LoginModalProps } from "./type";
import { Close, EyeOff, EyeOn, Lock, UserIcon } from "../shared/icons";

const { useForm } = Form;

const LoginModal: FC<LoginModalProps> = (props) => {
  const { onSubmit, loading, errorMessage } = props;
  const [form] = useForm();

  return (
    <Card className={styles.loginModal}>
      <div className={styles.logo}>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>

      <p className={styles.title}>Добро пожаловать!</p>
      <p className={styles.subtitle}>Пожалуйста, авторизуйтесь</p>

      <Form
        name="loginForm"
        form={form}
        className={styles.loginForm}
        layout="vertical"
        requiredMark="optional"
        onFinish={(fields: FormFields) => {
          onSubmit(fields);
        }}
      >
        <Form.Item<FormFields>
          label="Логин"
          name="username"
          rules={[
            { required: true, message: "Укажите ваш логин!" },
            { min: 3, message: "Минимум 3 символа!" },
            {
              pattern: /^[a-zA-Z0-9_]+$/,
              message: "Только буквы, цифры и подчеркивание!",
            },
          ]}
        >
          <Input
            prefix={<UserIcon />}
            suffix={
              <Button
                className={styles.closeButton}
                onClick={() => {
                  form.resetFields(["username"]);
                }}
                type="text"
              >
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
          rules={[
            {
              required: true,
              message: "Укажите ваш пароль!",
            },
            { min: 6, message: "Минимум 6 символов" },
            {
              pattern: /^[a-zA-Z0-9_!@#$%]+$/,
              message: "Пароль должен содержать знаки - a-zA-Z0-9_!@#$%",
            },
          ]}
        >
          <Input.Password
            prefix={<Lock />}
            iconRender={(visible) => {
              return visible ? (
                <Button style={{ padding: "0 4px", margin: "0px" }} type="text">
                  <EyeOn />
                </Button>
              ) : (
                <Button style={{ padding: "0 4px", margin: "0px" }} type="text">
                  <EyeOff />
                </Button>
              );
            }}
            className={styles.loginModalInput}
          />
        </Form.Item>
        <div className={styles.spinWrapper}>
          {loading && <Spin size="small" />}
        </div>
        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}

        <Form.Item<FormFields>
          name="remember"
          valuePropName="checked"
          initialValue={false}
          className={styles.rememberButton}
        >
          <Checkbox>Запомнить данные</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            className={styles.loginModalSubmit}
            htmlType="submit"
            type="primary"
            disabled={loading}
          >
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
  );
};

export default LoginModal;
