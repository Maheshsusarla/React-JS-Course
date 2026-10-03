import React from 'react'
import EmployeeSection from './EmployeeSection'

const Dashboard = ({userName}) => {
  return (
    <div>
        <EmployeeSection userName={userName} />
    </div>
  )
}

export default Dashboard