import * as axios from "axios";

//const baseURL = 'https://social-network.samuraijs.com/api/1.0/'
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "9bf6de36-9172-4ce4-839b-da632e33faae"
    }

});
export const userAPI = {
    getUsers: (page = 1, pageSize = 5) => {
        return instance.get(`users?page=${page}&count=${pageSize}`).then(response => {
            return response.data;

        })
    }
}

export const follow_unfollowAPI = {
    followUser:  (id) => {
        return instance.post(`follow/${id}`, {}).then(response => {
            return response.data;
        });
    },
    unfollowUser:  (id) => {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        });
    }

}

export const profileAPI = {
    getProfile: (profileId ) => {
        return instance.get(`profile/${profileId}`).then(response => {
            return response.data;
        })
    },

    getStatus: (profileId) => {
        console.log('api' + profileId)
        return instance.get(`profile/status/` + profileId).then(response => {
            return response.data;
        });

    },
    updateStatus: (status) => {
        return instance.put(`profile/status`, {status: status}).then(response => {
            return response.data;
        });

    }
}

export  const authAPI = {
    authMe: () => {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        })

    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => {
            return response.data;
        })
    },
    logout: () => {
        return instance.delete(`auth/login`).then(response => {
            return response.data;
        })
    }
}

