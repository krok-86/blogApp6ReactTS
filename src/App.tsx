// import "./App.css";
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


declare module 'styled-components'{
}
const App: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const [currentTheme, setCurrentTheme] = useState(theme.white);
const switchTheme = () => {
    setCurrentTheme((value) => (value.colorPrimary === theme.white.colorPrimary ? theme.black : theme.white));
    localStorage.setItem('theme', JSON.stringify(currentTheme));
    console.log(currentTheme)
}
        useEffect(() => {
        const selectedThemeJSON =  localStorage.getItem('theme');
        if (selectedThemeJSON) {
            const selectedTheme=JSON.parse(selectedThemeJSON);
            setCurrentTheme(selectedTheme)
        }
        dispatch(fetchAuthMe())
        navigate(JSON.parse(window.sessionStorage.getItem('lastRoute') || '{}'))
        window.onbeforeunload = () => {
            window.sessionStorage.setItem('lastRoute', JSON.stringify(window.location.pathname))
        }
    },[])
    
    return (
        <>
       <ThemeProvider theme={currentTheme}>
       <ConfigProvider theme={{token: currentTheme}}>
       <GlobalStyle />
         <Space direction="vertical">
         <Switch checkedChildren="light" unCheckedChildren="dark" defaultChecked
         onClick={switchTheme}
         />
         </Space>
        <Routes>
            <Route path="/" element={<Posts />}/>
            <Route element = {<PrivateRoute />}>
            <Route path="/createPost" element={<NewPost />}/>
            <Route path="/postEdit/:id" element={<PostEdit />}/>
            </Route>
            <Route path="/registration" element={<NewUser isRegistration={true} />}/>
            <Route path="/auth" element={<NewUser isRegistration={false} />}/>
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
    )
}

export default App;