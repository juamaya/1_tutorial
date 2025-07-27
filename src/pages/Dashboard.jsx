import React from 'react'
import Dashboard_card from '../components/Dashboard_card'

const Dashboard = () => {
  return (
     <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
       
      <Dashboard_card/>
    </div>
  )
}

export default Dashboard