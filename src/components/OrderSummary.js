import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {

    const navigate = useNavigate()

    return (
        <div>Thank you for your order!!
            <br></br>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}

export default OrderSummary