import React from 'react'

const UserCard = ({name,age,isOnline,hobbies,address}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <p>City: {address.city}</p>
    </div>
  )
}

export default UserCard