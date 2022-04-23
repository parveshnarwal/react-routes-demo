import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const showActiveUsers = searchParams.get('filter') === 'active'

    return (
        <div>
            <nav>
                <Link to='1'>User 1</Link>
                <Link to='2'>User 2</Link>
                <Link to='3'>User 3</Link>
            </nav>
            <button onClick={() => { setSearchParams({ filter : 'active' }) }}>Active Users</button>
            <button onClick={() => { setSearchParams({ }) }}>Reset Filters</button>
            <br></br>
            { showActiveUsers ? <h1>Showing active users</h1> : <h1>Showing all users</h1>  }
            <Outlet></Outlet>
        </div>
    )
}

export default Users