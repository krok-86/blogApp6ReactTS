import axiosInstance from ".";

import { IEditPost, IRegistrationForm, IRegistrationFormData, Post, TopicType } from "../types";

const postUrl = '/posts';
const topicUrl = '/topics';
const userRegUrl = '/users/registration';
const userAuthUrl = 'users/authorization';
const userAuthMeUrl = '/users/authorization/me';

//post block

export const getPostById = async (id: string) => {
    return await axiosInstance.get<Post>(`${postUrl}/${id}`)//type
}

export const putPostById = (params: IEditPost) => {
    return axiosInstance.put(`${postUrl}/${params.id}`, {postText: params.postText});//?
}

export const getPosts = () => {
    return axiosInstance.get(postUrl);
}

export const deletePostById = (id: string) => {
    return axiosInstance.delete<Post>(`${postUrl}/${id}`)//?
}

export const postPosts = (body: Post) => {
    return axiosInstance.post(postUrl, body)
}

//user block

export const postUserReg = (body: IRegistrationForm) => {
    return axiosInstance.post<IRegistrationFormData>(userRegUrl,body);
}

export const postUserAuth = (body: IRegistrationForm) => {
    return axiosInstance.post<IRegistrationFormData>(userAuthUrl,body);
}

export const getUserAuthMe = () => {
    return axiosInstance.get< IRegistrationForm>(userAuthMeUrl);
}

// topic block

export const getTopics = () => {
    return axiosInstance.get<TopicType[]>(topicUrl);
}