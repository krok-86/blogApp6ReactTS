import Posts from "./components/Posts/Posts";
import PostEdit from "./components/PostEdit/PostEdit";
import NewPost from "./components/NewPost/NewPost";
import NewUser from "./components/NewUser/NewUser";

import { FC, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import PrivateRoute from "./utils/router/PrivateRouter";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { fetchAuthMe } from "./redux/slices/auth";

import { LocalStorageUtil } from "./utils/localStorage/localStorage";
import { useAppDispatch } from "./hook";

import { ConfigProvider, Space, Switch } from "antd";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global.styled";
import { theme } from "./theme";

declare module "styled-components" {}

const App: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [currentTheme, setCurrentTheme] = useState(() => {    
    const isWhiteTheme = LocalStorageUtil.getItem("isWhiteTheme");
    const mode = isWhiteTheme ? theme.white : theme.black;
    return mode;
  });

  const switchTheme = () => {    
    const isWhite = currentTheme.colorPrimary === theme.white.colorPrimary;
    const newTheme = isWhite ? theme.black : theme.white;
    setCurrentTheme(newTheme);    
    LocalStorageUtil.setItem("isWhiteTheme", isWhite);
    return newTheme;
  };
  useEffect(() => {    
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
