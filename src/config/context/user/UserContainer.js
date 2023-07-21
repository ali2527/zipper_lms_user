import React, { useState } from "react"
import { UserProvider } from "./UserContext"
import {
    getFromStorage,
    removeFromStorage,
    addToStorage,
    LocalStorageKeys
} from "../../helpers"

function UserContainer({ children }) {
    const [user, setUser] = useState(getFromStorage(LocalStorageKeys.User))
    const [token, setToken] = useState(getFromStorage(LocalStorageKeys.Token))


    async function login({ user: _user, token: _token }) {
        updateUser(_user)
        updateToken(_token)
    }


    function updateUser(_user) {
        if (_user) {
            addToStorage(LocalStorageKeys.User, _user)
            setUser(_user)
        }
    }
    function updateToken(_token) {
        if (_token) {
            addToStorage(LocalStorageKeys.Token, _token)
            setToken(_token)
        }
    }

    function logout() {
        removeUser()
    }

    function removeUser() {
        removeFromStorage(LocalStorageKeys.User)
        removeFromStorage(LocalStorageKeys.Token)
        setUser(null)
        setToken(null)
    }

    return (
        <UserProvider
            value={{
                user,
                token,
                login,
                logout,
                updateUser,
                updateToken
            }}
        >
            {children}
        </UserProvider>
    )
}

export default UserContainer