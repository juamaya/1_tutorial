import React from 'react'
import EventList from '../components/EventList'

const Calendar = () => {
  return (
      <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Calendar</h1>
      <p>Consulta los eventos del calendario aquí.</p>
      <EventList/>
    </div>
  )
}

export default Calendar