// export const BASE_URL = "https://secure.demo243.webhostlabs.net:3002/api/"
// export const UPLOADS_URL = "https://secure.demo243.webhostlabs.net:3002/Uploads/"

import ChangePassword from "../../views/change-password"

export const BASE_URL = "http://localhost:3002/api"
export const UPLOADS_URL = "http://localhost:3002/Uploads"


export const AUTH = {
    signin: "/auth/signin",
    signup:"/auth/signup",
    emailCode:"/auth/emailVerificationCode",
    verifyCode:"/auth/verifyRecoverCode",
    resetPassword:"/auth/resetPassword",
}


export const STUDENT = {
    updateProfile : "/profile/updateProfile",
    changePassword:"/profile/changePassword"
}

export const USERS = {
    get: "/auth/signin"
}





