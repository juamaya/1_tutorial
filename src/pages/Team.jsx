import React from 'react'
import Equipo from '../components/Equipo'

const Team = () => {
  return (
      <div className="p-3 text-black text-center">
      <h1 className="text-3xl font-bold mb-2">Team</h1>
      <p className='mb-2 text-2xl'>Aquí puedes ver la información del equipo.</p>
      <Equipo/>
    </div>
  )
}

export default Team