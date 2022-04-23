import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    return (
        <div>Home Page
            <br></br>
            {/* replace will replace the history instead of appending it */}
            <button onClick={ ()=> navigate('order-summary', {replace : true}) } >Place Order</button>
        </div>
    )
}

export default Home