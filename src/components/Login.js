import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

const Login = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState('')
    const auth = useAuth()

    const location = useLocation()

    const redirectPath = location.state?.path || '/'


    const handleLogIn = () => {
        auth.login(user)
        navigate(redirectPath, {replace : true})
    }

    return (
        <div>
            <label>
                Username  : <input type="text" onChange={(e) => {setUser(e.target.value)}}></input>
            </label>
            <button onClick={handleLogIn}>Log In</button>
        </div>
    )
}

export default Login