
// export const BASE_URL = "http://localhost:3008/api"
// export const UPLOADS_URL = "http://localhost:3008/Uploads"
// export const SOCKET_URL = "http://localhost:3008"

export const BASE_URL = "https://api.zipperlearning.com/api"
export const UPLOADS_URL = "https://api.zipperlearning.com/Uploads"
export const SOCKET_URL = "https://api.zipperlearning.com"


export const AUTH = {
    signin: "/auth/signin",
    signup:"/auth/signup",
    emailCode:"/auth/emailVerificationCode",
    verifyCode:"/auth/verifyRecoverCode",
    resetPassword:"/auth/resetPassword",
}

export const CATEGORIES = {
    getAllcategories: "/category/getAllcategories",
    addCategory: "/category/addCategory",
    updateCategory: "/category/updateCategory/",
    toggleStatus: "/category/toggleStatus/",   
    edit:"/category/edit/",
  };



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

export const COURSE = {
    addCourse:"/course/addCourse",
    getAllCourses: "/course/getAllCourses",
    getAllCoachCourses: "/course/getAllCoachCourses/",
    getMyCourses: "/course/getMyCourses",
    getCourseById: "/course/getCourseById/",
    updateCourse:"/course/updateCourse/"
  };


  export const LECTURE = {
    getAllLecturesByCourse:"/lecture/getAllLecturesByCourse/",
    getLectureById:"/lecture/getLectureById/"
  };

export const SCHEDULE = {
    addSchedule: "/schedule/addSchedule",
    getMySchedule:"/schedule/getMySchedule",
    getScheduleByCoachId:"/schedule/getScheduleByCoachId/"
}

export const CHAT = {
    createChat: "/chat/createChat",
    getMyChats:"/chat/getMyChats",
}


export const MESSAGE = {
    createMessage: "/message/createMessage",
    getChatMessages:"/message/getChatMessages/",
}



export const REVIEWS={
    getAll:"/review/getAllReviewsByCoachId/",
    addReview:"/review/addReview",
    getCoachRatings:"/review/getCoachRatings/"
}



export const LESSON={
    bookLesson:"/lesson/addLesson",
    getUpcomingLessons:"/lesson/getAllUpcomingLessons",
    getCompletedLessons:"/lesson/getAllCompletedLessons",
    getLiveLessons:"/lesson/getAllLiveLessons",
    getLessonById:"/lesson/getLessonById/",
    rescheduleLesson:"/lesson/rescheduleLesson/",
    cancelLesson:"/lesson/cancelLesson/",
}

export const PAYMENT={
    lessonPayment:"/payment/lessonPayment",
    coursePayment:"/payment/coursePayment",
}


export const NOTIFICATION={
    getAllMyNotifications:"/notification/getAllMyNotifications",
    getUnreadNotifications:"/notification/getUnreadNotifications",
    toggleNotification:"/notification/toggleNotification/"
}


export const QUERY={
    addQuery:"/query/addQuery"
}


