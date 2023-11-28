import "./App.tsx";
import Posts from "./components/Posts/Posts";
import PostEdit from "./components/PostEdit/PostEdit";
import NewPost from "./components/NewPost/NewPost";
import NewUser from "./components/NewUser/NewUser";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchAuthMe } from "./redux/slices/auth";
import { useEffect } from "react";
import PrivateRoute from "./utils/router/PrivateRouter";
import { useAppDispatch } from "./hook";

function App(){
    const dispatch = useAppDispatch();
    const navigate = useNavigate()   
    useEffect(() => {
        dispatch(fetchAuthMe())
        navigate(JSON.parse(window.sessionStorage.getItem('lastRoute') || '{}'))
        window.onbeforeunload = () => {
            window.sessionStorage.setItem('lastRoute', JSON.stringify(window.location.pathname))
        }
    },[])
    return (
        <>
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
        </>
    )
}

export default App;