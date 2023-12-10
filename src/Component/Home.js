import React from 'react'
import { useContext } from 'react'
import { login } from './Login';
import { UserContext } from './Simpleexample';

const Home = () => {

    // const msg= useContext(UserContext)
    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h2>Home</h2>
            {/* {user}
        <button onClick={() => setUser("John")}>Change User</button> */}
        <pre>{JSON.stringify(user, null, 2)}</pre>
            {user ? (
                <button onClick={() => {setUser(null);}}>logout</button>
            ) : (
                <button onClick={async () => {
                     const user = await login();
                        setUser(user);
                    }}>login</button>
            )}
        </div> 
    )
}

export default Home