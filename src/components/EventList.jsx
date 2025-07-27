// src/components/EventList.jsx

const events = [
  {
    id: 1,
    date: '2025-08-10',
    title: 'Lanzamiento de producto',
    location: 'Auditorio Central, CDMX',
    time: '10:00 AM - 1:00 PM',
    description: 'Presentación del nuevo sistema de automatización empresarial.',
  },
  {
    id: 2,
    date: '2025-08-22',
    title: 'Reunión anual de socios',
    location: 'Hotel Hilton, Monterrey',
    time: '3:00 PM - 6:00 PM',
    description: 'Evaluación de resultados y planeación estratégica del próximo año.',
  },
  {
    id: 3,
    date: '2025-09-15',
    title: 'Feria de Innovación',
    location: 'Centro de Convenciones, Guadalajara',
    time: '9:00 AM - 5:00 PM',
    description: 'Participación en el evento nacional de innovación tecnológica.',
  },
]

const EventList = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">📅 Próximos Eventos</h2>
      <ul className="space-y-6">
        {events.map((event) => (
          <li
            key={event.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-5 transition hover:shadow-md"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{event.title}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                {new Date(event.date).toLocaleDateString('es-MX', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1"><strong>📍 Ubicación:</strong> {event.location}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2"><strong>🕒 Hora:</strong> {event.time}</p>
            <p className="text-gray-700 dark:text-gray-200 text-sm">{event.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default EventList
