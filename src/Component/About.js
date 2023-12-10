import React, { useContext } from 'react'
import { UserContext } from './Simpleexample';

const About = () => {
    const {user} = useContext(UserContext);
 
    return (
      <div>
        <h2>About</h2>
        {/* {user} */}
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
  )
}

export default About