import "./App.css";
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
import { Space, Switch } from "antd";
import { ThemeProvider } from "styled-components";


declare module 'styled-components'{
    export interface DefaultTheme {
        colors: {
            primary:string,
            secondary: string,
        }
    }
}
const App: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const theme = {
        colors: {
            primary: "green",
            secondary: "white"
        }
    }
    const [currentTheme, setCurrentTheme] = useState(theme.colors.primary);
const switchTheme = () => {
    setCurrentTheme((value) => (value === theme.colors.primary ? theme.colors.secondary : theme.colors.primary));
    console.log(currentTheme)
}

    // const lightTheme = {
    //     colorPrimary: "blue",
    // };
    // const darkTheme = {
    //     colorPrimery: "black",
    // };
        useEffect(() => {
        dispatch(fetchAuthMe())
        navigate(JSON.parse(window.sessionStorage.getItem('lastRoute') || '{}'))
        window.onbeforeunload = () => {
            window.sessionStorage.setItem('lastRoute', JSON.stringify(window.location.pathname))
        }
    },[])
    
    return (
        <>
        // @ts-expect-error
       <ThemeProvider theme={currentTheme}>
         <Space direction="vertical">
         <Switch checkedChildren="light" unCheckedChildren="dark" defaultChecked 
         onClick={switchTheme}
         />       
         </Space>
       {/* > */}
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
    </ThemeProvider>
        </>
    )
}

export default App;