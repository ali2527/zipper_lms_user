import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Navigate } from 'react-router'

const UserAuthCheck = ({ children }) => {
    const navigate = useNavigate()
    const { userToken } = useSelector((state) => state.user)
    useEffect(() => {
        if (!userToken) {
            navigate("/signin", { replace: true })
        }
    })
    if(!userToken){
        return <Navigate to="/signin" replace={true} />
    }
    return (
        <>{children}</>
    )
}

export default UserAuthCheck