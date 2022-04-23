import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {

    // const params = useParams()

    // const id = params.userId

    const { userId } = useParams()

    return (
        <div>User Details : {userId}</div>
    )
}

export default UserDetails