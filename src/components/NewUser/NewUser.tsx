import { FC } from "react";
import { IRegistrationForm } from "../../types";

import {
  CLEAR_BUTTON,
  GO_BACK_BUTTON,
  GO_LOG_IN,
  GO_SIGN_UP,
  SUBMIT_BUTTON,
  URLS,
} from "../../constants";

import NewUserStyled from "./NewUser.styled";

import { Button, Form, Input } from "antd";
import { LeftOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hook";

import { successToast, errorToast } from "../../utils/toasts/toasts";

import { fetchAuth, fetchReg } from "../../redux/slices/auth";
import { LocalStorageUtil } from "../../utils/localStorage/localStorage";

interface INewUser {
  isRegistration: boolean;
}
type FieldType = {
  name?: string;
  email?: string;
  password?: string;
  remember?: string;
};

const NewUser: FC<INewUser> = ({ isRegistration }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const title = isRegistration ? "Registration" : "Authorization";

  const submitForm = async (value: IRegistrationForm) => {
    try {
      if (isRegistration) {
        const data = await dispatch(fetchReg(value)).unwrap();
        if (data.token) {
          LocalStorageUtil.setItem("token", data.token);
        }
        successToast("User is created");
        navigate(`${URLS.MAIN_PAGE}`);
      } else {
        const data = await dispatch(fetchAuth(value)).unwrap();
        if (data.token?.length) {
          LocalStorageUtil.setItem("token", data.token);
          successToast("User is authorized");
          navigate(`${URLS.MAIN_PAGE}`);
        } else {
          errorToast(data?.payload?.data || "");
        }
      }
      navigate(`${URLS.MAIN_PAGE}`);
    } catch (err: any) {
      errorToast(err.data);
    }
  };

  return (
    <NewUserStyled>
      <div className="user-text-wrap">
        <div className="user-header-wrap">
          <div className="user-text">{title}</div>
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={submitForm}
          autoComplete="off"
        >
          {isRegistration && (
            <Form.Item<FieldType>
              label="Username"
              name="name"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
          )}
          <Form.Item<FieldType>
            label="Email"
            name={"email"}
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            className="newUser-text"
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <div className="button-wrap">
            <Form.Item>
              <Button className="user-button" type="primary" htmlType="submit">
                {SUBMIT_BUTTON}
              </Button>
            </Form.Item>
            <Form.Item>
              <Button className="user-button" type="primary" htmlType="reset">
                {CLEAR_BUTTON}
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
      {isRegistration ? (
        <Link to={URLS.AUTH} className="form-go-back">
          <LeftOutlined />
          {GO_LOG_IN}
        </Link>
      ) : (
        <Link to={URLS.REG} className="form-go-back">
          <LeftOutlined />
          {GO_SIGN_UP}
        </Link>
      )}
      <Link to={URLS.MAIN_PAGE} className="form-go-back form-go-back__grey">
        <LeftOutlined />
        {GO_BACK_BUTTON}
      </Link>
    </NewUserStyled>
  );
};
export default NewUser;
