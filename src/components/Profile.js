import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

const Profile = () => {

    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogOut = () => {
        auth.logout()
        navigate('/')
    }

    return (
        <div>Profile Page
            <br></br>
            Welcome! {auth.user}

            <button onClick={ handleLogOut }>Log Out</button>
        </div>
    )
}

export default Profile