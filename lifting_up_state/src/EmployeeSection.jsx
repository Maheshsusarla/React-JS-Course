import React from 'react'
import EmployeeProfile from './EmployeeProfile'

const EmployeeSection = ({userName}) => {
  return (
    <div>
      <EmployeeProfile userName={userName} />
    </div>
  )
}

export default EmployeeSection