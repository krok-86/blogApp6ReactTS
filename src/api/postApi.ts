import axiosInstance from ".";

const postUrl = '/posts';
const topicUrl = '/topics';
const userRegUrl = '/users/registration';
const userAuthUrl = 'users/authorization';
const userAuthMeUrl = '/users/authorization/me';

//post block

export const getPostById = async (id) => {
    return await axiosInstance.get(`${postUrl}/${id}`)//why {params: id}?
}

export const putPostById = (params) => {
    return axiosInstance.put(`${postUrl}/${params.id}`, {postText: params.postText});//?
}

export const getPosts = () => {
    return axiosInstance.get(postUrl);
}

export const deletePostById = (id) => {
    return axiosInstance.delete(`${postUrl}/${id}`)//?
}

export const postPosts = (body) => {
    return axiosInstance.post(postUrl, body)
}

//user block

// export const getUsers = () => {
//     return axiosInstance.get(userUrl);
// }

export const postUserReg = (body) => {
    return axiosInstance.post(userRegUrl,body);
}

export const postUserAuth = (body) => {
    return axiosInstance.post(userAuthUrl,body);
}

export const getUserAuthMe = () => {
    return axiosInstance.get(userAuthMeUrl);
}

// topic block

export const getTopics = () => {
    return axiosInstance.get(topicUrl);
}