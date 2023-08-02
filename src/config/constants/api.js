export const BASE_URL = "https://secure.demo243.webhostlabs.net:3002/api/"
export const UPLOADS_URL = "https://secure.demo243.webhostlabs.net:3002/Uploads/"

// import ChangePassword from "../../views/change-password"

// export const BASE_URL = "http://localhost:3002/api"
// export const UPLOADS_URL = "http://localhost:3002/Uploads"


export const AUTH = {
    signin: "/auth/signin",
    signup:"/auth/signup",
    emailCode:"/auth/emailVerificationCode",
    verifyCode:"/auth/verifyRecoverCode",
    resetPassword:"/auth/resetPassword",
}



export const STUDENT = {
    updateProfile : "/profile/updateProfile",
    changePassword:"/profile/changePassword",
    getMyCoaches:"/profile/getMyCoaches",
}

export const USERS = {
    get: "/auth/signin",
    getAllCoaches:"/admin/user/getAllCoaches",
    getAllTutors:"/admin/user/getAllTutors",
    getCoachById:"/admin/user/getCoachById/"
}

export const COACH = {
    updateProfile : "/coach/profile/updateProfile",
    changePassword:"/coach/profile/changePassword"
}

export const SERVICES = {
    getAll: "/service/getAllServices"
}

export const RATES = {
    getMyRates: "/rates/getMyRates",
    setRates : "/rates/setRates"
}

export const COMISSSION = {
    getComission : "/comission/getComission"
}

export const SCHEDULE = {
    addSchedule: "/schedule/addSchedule",
    getMySchedule:"/schedule/getMySchedule",
    getScheduleByCoachId:"/schedule/getScheduleByCoachId/"
}


export const REVIEWS={
    getAll:"/review/getAllReviewsByCoachId/",
    getCoachRatings:"/review/getCoachRatings/"
}



export const LESSON={
    bookLesson:"/lesson/addLesson",
    getUpcomingLessons:"/lesson/getAllUpcomingLessons",
    getCompletedLessons:"/lesson/getAllCompletedLessons",
    getLiveLessons:"/lesson/getAllLiveLessons",
    getLessonById:"/lesson/getLessonById/",
}

export const PAYMENT={
    lessonPayment:"/payment/lessonPayment",
}




