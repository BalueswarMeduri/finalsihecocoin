import axios from "axios";

const baseURL = String(import.meta.env.VITE_URI);

const apiClient2 = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
});

const apiClient = axios.create({
    baseURL : baseURL,
    headers:{
        'Content-Type' : 'application/json'
    }
})


const handleApiResponse = (apiCall) => {
    return new Promise((resolve, reject) => {
        apiCall
            .then((res) => resolve(res.data))
            .catch((error) => {
                const errorMessage = error.response?.data?.match(/Error: ([\s\S]*?)<br>/);
                if (errorMessage) reject(errorMessage[1]);
                else reject("unknown error");
            });
    });
};

export const login = (credentials) => handleApiResponse(
    apiClient.post(`${baseURL}/users/login`, {email : credentials.email , password : credentials.password} , {withCredentials:true})
);

export const logout = () => handleApiResponse(
    apiClient.post(`${baseURL}/users/logout` , {} , {withCredentials : true})
)

export const register = (credentials) => handleApiResponse(
    apiClient.post(`${baseURL}/users/register`, {...credentials} , {withCredentials : true})
);

export const forgetPassword = (credentials) => handleApiResponse(
    apiClient.post(`${baseURL}/users/forget-password`, {email : credentials.email}, { withCredentials: true })
);

export const newPassword = (credentials) => handleApiResponse(
    apiClient.post(`${baseURL}/users/new-password`, {...credentials}, { withCredentials: true })
);

export const refreshToken = () => handleApiResponse(
    apiClient.post(`${baseURL}/users/refresh-token`, {}, { withCredentials: true })
);

export const changePassword = (credentials) => handleApiResponse(
    apiClient.post(`${baseURL}/users/change-password`, {...credentials}, { withCredentials: true })
);

export const currentUser = () => handleApiResponse(
    apiClient.get(`${baseURL}/users/current-user`, { withCredentials: true })
);
