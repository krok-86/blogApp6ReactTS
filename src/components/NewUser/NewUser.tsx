import NewUserStyled from "./NewUserStyled";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { successToast, errorToast } from "../../utils/toasts/toasts";
import { fetchAuth, fetchReg } from "../../redux/slices/auth";
import { FC } from "react";
import { useAppDispatch } from "../../hook";
import { IRegistrationForm } from "../../types";
import { Button, Form, Input } from "antd";
import { LeftOutlined } from "@ant-design/icons";

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

  const submitForm = async (value: IRegistrationForm) => {
    console.log("Success:", value);
    try {
      if (isRegistration) {
        const data = await dispatch(fetchReg(value)).unwrap();
        if ( data.token) {
          window.localStorage.setItem("token", data.token);// add utils
        }
        successToast("User is created");
        navigate("/");
      } else {
        const data = await dispatch(fetchAuth(value)).unwrap();
        if ("token" in data && data.token) {
          window.localStorage.setItem("token", data.token);
          successToast("User is authorized");
          navigate("/");
        } else {
          errorToast(data?.payload?.data || "");
        }
      }
      navigate("/");
    } catch (err: any) {
      errorToast(err.data);
    }
  };

  const title = isRegistration ? "Registration" : "Authorization";

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const changedLink = isRegistration ? (//fix 
    <Link to="/auth" className="form-go-back">
      <LeftOutlined />
      Have account? Go to log in
    </Link>
  ) : (
    <Link to="/registration" className="form-go-back">
      <LeftOutlined />
      Have not account? Go to sign up
    </Link>
  );

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
          onFinishFailed={onFinishFailed}
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
                Submit
              </Button>
            </Form.Item>
            <Form.Item>
              <Button className="user-button" type="primary" htmlType="reset">
                Reset
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
      {changedLink}
      <Link to="/" className="form-go-back form-go-back__grey">
        <LeftOutlined />
        Go back to posts list
      </Link>
    </NewUserStyled>
  );
};
export default NewUser;
