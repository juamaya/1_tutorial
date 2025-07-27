// src/pages/Dashboard.jsx
import { BarChart4, Users, CalendarDays, DollarSign } from 'lucide-react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const stats = [
  {
    id: 1,
    title: 'Usuarios activos',
    value: '1,245',
    icon: <Users className="w-6 h-6 text-indigo-600" />,
  },
  {
    id: 2,
    title: 'Eventos próximos',
    value: '12',
    icon: <CalendarDays className="w-6 h-6 text-green-600" />,
  },
  {
    id: 3,
    title: 'Ingresos (este mes)',
    value: '$24,300',
    icon: <DollarSign className="w-6 h-6 text-emerald-600" />,
  },
  {
    id: 4,
    title: 'Proyectos activos',
    value: '8',
    icon: <BarChart4 className="w-6 h-6 text-yellow-500" />,
  },
]

const Dashboard_card = () => {
  const progressData = [
    { name: 'Ene', progreso: 20 },
    { name: 'Feb', progreso: 40 },
    { name: 'Mar', progreso: 50 },
    { name: 'Abr', progreso: 65 },
    { name: 'May', progreso: 80 },
    { name: 'Jun', progreso: 90 },
    { name: 'Jul', progreso: 100 },
  ]

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">📊 Panel de Control</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full">
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
                <p className="text-xl font-semibold text-gray-800 dark:text-white">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Aquí podrías añadir gráficos, tablas, etc. */}



      {/* Tabla de proyectos recientes */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">🗂 Proyectos recientes</h2>
        <div className="overflow-auto rounded-xl shadow">
          <table className="min-w-full bg-white dark:bg-gray-800">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Nombre</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Responsable</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Estado</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {[
                { name: 'Intranet Corporativa', owner: 'Ana López', status: 'En progreso', date: '2025-07-20' },
                { name: 'Landing Page Nueva', owner: 'Carlos Ruiz', status: 'Completado', date: '2025-07-10' },
                { name: 'App de Recursos Humanos', owner: 'Marta Peña', status: 'En revisión', date: '2025-07-01' },
              ].map((project, idx) => (
                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-100">{project.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">{project.owner}</td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${project.status === 'Completado'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : project.status === 'En progreso'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                    {new Date(project.date).toLocaleDateString('es-MX')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

        {/* Aquí podrías añadir gráficos . */}

      <div className="mt-10">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">📈 Progreso mensual</h2>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip/>
              <Line
                type="monotone"
                dataKey="progreso"
                stroke="#6366f1"
                strokeWidth={5}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  )
}

export default Dashboard_card
