import axiosInstance from ".";

const postUrl = '/posts';
const topicUrl = '/topics';
const userRegUrl = '/users/registration';
const userAuthUrl = 'users/authorization';
const userAuthMeUrl = '/users/authorization/me';

//post block

export const getPostById = async (id: number) => {
    return await axiosInstance.get(`${postUrl}/${id}`)//why {params: id}?
}

export const putPostById = (params: {id: number; postText: string}) => {
    return axiosInstance.put(`${postUrl}/${params.id}`, {postText: params.postText});//?
}

export const getPosts = () => {
    return axiosInstance.get(postUrl);
}

export const deletePostById = (id: number) => {
    return axiosInstance.delete(`${postUrl}/${id}`)//?
}

export const postPosts = (body: string) => {
    return axiosInstance.post(postUrl, body)
}

//user block

// export const getUsers = () => {
//     return axiosInstance.get(userUrl);
// }

export const postUserReg = (body: string) => {
    return axiosInstance.post(userRegUrl,body);
}

export const postUserAuth = (body: string) => {
    return axiosInstance.post(userAuthUrl,body);
}

export const getUserAuthMe = () => {
    return axiosInstance.get(userAuthMeUrl);
}

// topic block

export const getTopics = () => {
    return axiosInstance.get(topicUrl);
}