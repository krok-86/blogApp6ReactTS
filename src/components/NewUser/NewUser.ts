import NewUserStyled from "./NewUserStyled";
import { useForm } from "react-hook-form";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import unknown from "../../img/Unknown_person.jpg";
import { successToast, errorToast } from "../Utilities/toasts";
import { useDispatch } from "react-redux";
import { fetchAuth, fetchReg } from "../../redux/slices/auth";

const NewUser = ({ isRegistration }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "", //test formalin
      email: "", //test formalin@mail.ru
      password: "", // test formalin
    },
    mode: "onChange",
  });

  const submitForm = async (value) => {
    try {
      if (isRegistration) {
        const data = await dispatch(fetchReg(value)).unwrap();
        if ("token" in data) {
          window.localStorage.setItem("token", data.token);
        }
        successToast("User is created");
        navigate("/");
      } else {
        const data = await dispatch(fetchAuth(value)).unwrap();
        if ("token" in data) {
          window.localStorage.setItem("token", data.token);
          successToast("User is authorized");
          navigate("/");
        } else {
          errorToast(data.payload.data);
        }
      }
      navigate("/");
    } catch (err) {
      errorToast(err.data);
    }
  };
  const resetForm = () => {
    reset();
  };
const goBack = () => {
  console.log(">>>>>>>>>","click")
  navigate(-1);
};
  const title = isRegistration ? "Registration" : "Authorization";

  return (
    <NewUserStyled>
      <div className="user-value">
        <div className="user-text">{title}</div>
        <div className="user-img-wrap">
          <form onSubmit={handleSubmit(submitForm)}>
            {isRegistration && (
              <input
                className={errors.name ? "user-input error" : "user-input"}
                placeholder="name"
                label="Name"
                type="text"
                {...register("name", { required: "add name" })}
              />
            )}
            <input
              className={errors.email ? "user-input error" : "user-input"}
              placeholder="email"
              label="E-mail"
              type="email"
              {...register("email", { required: "add email" })}
            />
            <input
              className={errors.password ? "user-input error" : "user-input"}
              placeholder="password"
              label="Password"
              type="password"
              {...register("password", { required: "add password" })}
            ></input>
            <div className="form-buttons">
              <Button
                className="user-button"
                disabled={!isValid}
                type="submit" //?
                name="submit" //?
              />
              <Button name="clear form" handleClick={resetForm} />
              {isRegistration && (
                <Link to="/auth">
                  <Button className="user-button" name="authorization" />
                </Link>
              )}
              
            </div>
          </form>
          <Button className="user-button" name="go back" handleClick = {goBack} />
          <div className="user-avatar-wrap">
          <img src={unknown} alt="unknown" className="user-img" />
          </div>
        </div>
      </div>
    </NewUserStyled>
  );
};
export default NewUser;
