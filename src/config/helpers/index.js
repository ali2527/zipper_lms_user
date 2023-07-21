export const imageLoader = ({ src, width, quality }) => {
    return `https://thumbs.gfycat.com/DesertedDazzlingBudgie-size_restricted.gif`
}
const ISSERVER = typeof window === "undefined";


export const deleteUser = () => {
    if (!ISSERVER) {
        localStorage.removeItem("user");
    }
};

export const addToStorage = function (key, data) {
    data = JSON.stringify(data)
    if (!ISSERVER) {
        localStorage.setItem(key, data)
    }
}

export const getFromStorage = function (key) {
    if (!ISSERVER) {
        return JSON.parse(localStorage.getItem(key))
    }
    return ''
}

export const removeFromStorage = function (key) {
    if (!ISSERVER) {
        localStorage.removeItem(key)
    }
}

export const LocalStorageKeys = Object.freeze({
    User: "user",
    Token: "token"
})