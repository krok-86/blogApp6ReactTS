import NewUserStyled from "./NewUserStyled";
import { useForm } from "react-hook-form";
// import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import unknown from "../../img/Unknown_person.jpg";
import { successToast, errorToast } from "../../utils/toasts/toasts";
import { fetchAuth, fetchReg } from "../../redux/slices/auth";
import { FC } from "react";
import { useAppDispatch } from "../../hook";
import { IRegistrationForm } from "../../types";

import { Button, Checkbox, Form, Input } from 'antd';
import { LeftOutlined } from "@ant-design/icons";

interface INewUser {
  isRegistration: boolean,
}
type FieldType = {
  username?: string;
  email?: string;
  password?: string;
  remember?: string;
};



const NewUser: FC <INewUser> = ({ isRegistration }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   setError,
  //   formState: { errors, isValid },
  // } = useForm({
  //   defaultValues: {
  //     name: "", //test formalin
  //     email: "", //test formalin@mail.ru
  //     password: "", // test formalin
  //   },
  //   mode: "onChange",
  // });

  const submitForm = async (value: IRegistrationForm) => {
    console.log('Success:', value);
    try {
      if (isRegistration) {
        const data = await dispatch(fetchReg(value)).unwrap();
        if ("token" in data && data.token) {
          window.localStorage.setItem("token", data.token);
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
  // const resetForm = () => {
  //   reset();
  // };
  
  const title = isRegistration ? "Registration" : "Authorization";



  // const onFinish = (values: any) => {
  //   console.log('Success:', values);
  // };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  

  return (
<NewUserStyled>
    <div className= "user-text-wrap">
    <div className= "user-header-wrap">
    <Link to="/">
      <LeftOutlined />
      </Link> 
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
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    )}
    <Form.Item<FieldType>
      label="Email"
      name={'email'}
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input />
    </Form.Item>

     {/* <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
      <Input /> */}

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
        </Form.Item>
    <div className = "button-wrap">
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="reset">
        Reset
      </Button>
    </Form.Item>
    {isRegistration && (
      <Link to="/auth">
        <Button type="primary">
        authorization
          </Button>
      </Link>
    )}
    </div>
  </Form>
  </div>
  </NewUserStyled>

    // <NewUserStyled>
    //   <div className="user-value"> 
    //   <div className="user-head">
    //   <Link to="/">
    //   <Button className="post-button-area" name="⇦" /> 
    //   </Link> 
    //     <div className= "user-text-wrap">
    //     <div className="user-text">{title}</div>
    //     </div>
    //   </div>
    //     <div className="user-img-wrap">
    //       <form onSubmit={handleSubmit(submitForm)}>
    //         {isRegistration && (
    //           <input
    //             className={errors.name ? "user-input error" : "user-input"}
    //             placeholder="name"
    //             // label="Name"
    //             type="text"
    //             {...register("name", { required: "add name" })}
    //           />
    //         )}
    //         <input
    //           className={errors.email ? "user-input error" : "user-input"}
    //           placeholder="email"
    //           // label="E-mail"
    //           type="email"
    //           {...register("email", { required: "add email" })}
    //         />
    //         <input
    //           className={errors.password ? "user-input error" : "user-input"}
    //           placeholder="password"
    //           // label="Password"
    //           type="password"
    //           {...register("password", { required: "add password" })}
    //         ></input>
    //         <div className="form-buttons">
    //           <Button
    //             className="user-button"
    //             disabled={!isValid}
    //             type="submit" //?
    //             name="submit" //?
    //           />
    //           <Button name="clear form" handleClick={resetForm} />
    //           {isRegistration && (
    //             <Link to="/auth">
    //               <Button className="user-button" name="authorization" />
    //             </Link>
    //           )}
              
    //         </div>
    //       </form>          
    //       {/* <div className="user-avatar-wrap"> */}
    //       <img src={unknown} alt="unknown" className="user-img" />
    //       {/* </div> */}
    //     </div>
    //   </div>
    // </NewUserStyled>
  );
};
export default NewUser;
