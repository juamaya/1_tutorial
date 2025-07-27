import { motion } from 'framer-motion'

const ProjectCard = ({ image, title, description, onClick, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-sm w-full flex flex-col"
    >
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover p-4"
      />

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>

        <div className="mt-auto pt-4">
          <button
            onClick={onClick}
            className="px-4 py-2 cursor-pointer bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 transition"
          >
            Ver Proyecto
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
