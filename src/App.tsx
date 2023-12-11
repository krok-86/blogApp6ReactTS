import Posts from "./components/Posts/Posts";
import PostEdit from "./components/PostEdit/PostEdit";
import NewPost from "./components/NewPost/NewPost";
import NewUser from "./components/NewUser/NewUser";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchAuthMe } from "./redux/slices/auth";
import { FC, useEffect, useState } from "react";
import PrivateRoute from "./utils/router/PrivateRouter";
import { useAppDispatch } from "./hook";
import { ConfigProvider, Space, Switch } from "antd";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyle";
import { theme } from "./theme";

declare module "styled-components" {};

const App: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [currentTheme, setCurrentTheme] = useState(() => {
    const storedTheme = localStorage.getItem("mode");
    const mode = storedTheme ? JSON.parse(storedTheme) : theme.white;
    return mode;
  });

  const switchTheme = () => {
    const newTheme =
      currentTheme.colorPrimary === theme.white.colorPrimary
        ? theme.black
        : theme.white;
    setCurrentTheme(newTheme);
    localStorage.setItem("mode", JSON.stringify(newTheme));
    return newTheme;
  };
  useEffect(() => {//fix
    dispatch(fetchAuthMe());
    navigate(JSON.parse(window.sessionStorage.getItem("lastRoute") || "{}"));
    window.onbeforeunload = () => {
      window.sessionStorage.setItem(
        "lastRoute",
        JSON.stringify(window.location.pathname)
      );
    };
  }, []);

  return (
    <>    
      <ThemeProvider theme={currentTheme}>
        <ConfigProvider theme={{ token: currentTheme }}>
          <GlobalStyle />
          <Space direction="vertical">
            <Switch
              checkedChildren="dark"
              unCheckedChildren="light"
              // defaultChecked
              onClick={switchTheme}
            />
          </Space>         
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route element={<PrivateRoute />}>
              <Route path="/createPost" element={<NewPost />} />
              <Route path="/postEdit/:id" element={<PostEdit />} />
            </Route>
            <Route
              path="/registration"
              element={<NewUser isRegistration={true} />}
            />
            <Route path="/auth" element={<NewUser isRegistration={false} />} />
          </Routes>          
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />          
        </ConfigProvider>
      </ThemeProvider>             
      </>
  );
};

export default App;
