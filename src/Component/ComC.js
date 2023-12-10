import React from 'react'
import { useContext } from 'react'
import { firstname, lastname } from './Simpleexample';
const ComC = () => {

    const fname=useContext(firstname)
    const lname=useContext(lastname)
    // console.log(fname,lname);
  return (
    <div>My Name is {fname} - {lname}</div>
  )
}

export default ComC